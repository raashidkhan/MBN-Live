import React from "react"
import UpdownCard from "../cards/UpdownCard"
import { useStaticQuery, graphql } from "gatsby"

const RecentNews = () => {
  const data = useStaticQuery(graphql`
    {
      news: allStrapiNews(limit: 3, sort: { fields: strapiId, order: DESC }) {
        nodes {
          author
          category
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          slug
          title
          strapiId
          date
        }
      }
    }
  `)

  return (
    <div className="recentNews">
      {data.news.nodes.map((item, index) => {
        return (
          <div className="recentNews-Card" key={index}>
            <UpdownCard
              category={item.category}
              title={item.title}
              date={item.date}
              image={item.image.childImageSharp.fluid}
              slug={item.slug}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RecentNews
