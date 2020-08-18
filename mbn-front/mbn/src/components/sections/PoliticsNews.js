import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../cards/UpdownCard"
import { Link } from "gatsby"

const PoliticsNews = () => {
  const data = useStaticQuery(graphql`
    {
      politicsNews: allStrapiNews(
        filter: { category: { eq: "Politics" } }
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
    <section id="politicsNews">
      <h2 className="sectionTitle politicsNews-heading">Politics</h2>
      <div className="politicsNews">
        {data.politicsNews.nodes.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image.childImageSharp.fluid}
              category={item.category}
              date={item.date}
              title={item.title}
              slug={item.slug}
            ></Card>
          )
        })}
      </div>
      <Link
        className="categoryPage-link"
        aria-label="More Politics News"
        to="/Politics"
      >
        More
        <span></span>
      </Link>
    </section>
  )
}

export default PoliticsNews
