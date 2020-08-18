import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardOne from "../cards/SidebysideCard"
import CardTwo from "../cards/FullviewCard"
import { Link } from "gatsby"

const Sports = () => {
  const data = useStaticQuery(graphql`
    {
      sportsNews: allStrapiNews(
        filter: { category: { eq: "Sports" } }
        sort: { fields: strapiId, order: DESC }
        limit: 6
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
    <section id="sportsNews">
      <h2 className="sectionTitle indiaNews-heading">Sports</h2>
      <div className="sportsNews">
        <div className="sportsNews-col1">
          {data.sportsNews.nodes.slice(0, 4).map((item, index) => {
            return (
              <CardOne
                key={index}
                image={item.image.childImageSharp.fluid}
                category={item.category}
                date={item.date}
                title={item.title}
                slug={item.slug}
              ></CardOne>
            )
          })}
        </div>
        <div className="sportsNews-col2">
          {data.sportsNews.nodes.slice(4).map((item, index) => {
            return (
              <CardTwo
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
      </div>
      <Link
        className="categoryPage-link"
        aria-label="More Sports News"
        to="/Sports"
      >
        More
        <span></span>
      </Link>
    </section>
  )
}

export default Sports
