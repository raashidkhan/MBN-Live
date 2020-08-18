import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardOne from "../cards/FullviewCard"
import CardTwo from "../cards/SidebysideCard"
import { Link } from "gatsby"

const MumbaiNews = () => {
  const data = useStaticQuery(graphql`
    {
      mumbaiNews: allStrapiNews(
        filter: { category: { eq: "Mumbai" } }
        sort: { fields: strapiId, order: DESC }
        limit: 5
      ) {
        nodes {
          author
          category
          date
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          slug
          title
        }
      }
    }
  `)

  return (
    <section id="mumbaiNews">
      <div className="mumbaiNews">
        <h2 className="sectionTitle politicsNews-heading">Mumbai</h2>
        <div className="mumbaiNews-row1">
          {data.mumbaiNews.nodes.slice(0, 1).map((item, index) => {
            return (
              <CardOne
                key={index}
                image={item.image.childImageSharp.fluid}
                title={`${item.title}`}
                date={`${item.date}`}
                category={`${item.category}`}
                slug={`${item.slug}`}
              />
            )
          })}
        </div>
        <div className="mumbaiNews-row2">
          {data.mumbaiNews.nodes.slice(1).map((item, index) => {
            return (
              <CardTwo
                key={index}
                image={item.image.childImageSharp.fluid}
                category={item.category}
                date={item.date}
                title={item.title}
                slug={item.slug}
              ></CardTwo>
            )
          })}
        </div>
      </div>
      <Link
        className="categoryPage-link"
        aria-label="More Mumbai News"
        to="/Mumbai"
      >
        More
        <span></span>
      </Link>
    </section>
  )
}

export default MumbaiNews
