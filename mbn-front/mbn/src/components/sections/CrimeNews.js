import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../cards/FullviewCard"
import { Link } from "gatsby"

const CrimeNews = () => {
  const data = useStaticQuery(graphql`
    {
      crimeNews: allStrapiNews(
        filter: { category: { eq: "Crime" } }
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
    <section id="crimeNews">
      <h2 className="sectionTitle indiaNews-heading">Crime</h2>
      <div className="crimeNews">
        <div className="crimeNews-col1">
          {data.crimeNews.nodes.slice(0, 1).map((item, index) => {
            return (
              <Card
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
        <div className="crimeNews-col2">
          {data.crimeNews.nodes.slice(1).map((item, index) => {
            return (
              <Card
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
        aria-label="More Crime News"
        to="/Crime"
      >
        More
        <span></span>
      </Link>
    </section>
  )
}

export default CrimeNews
