import React from "react"
import UpdownCard from "../cards/UpdownCard"
import { useStaticQuery, graphql } from "gatsby"

const RecentNews = props => {
  const data = useStaticQuery(graphql`
    {
      news: allStrapiNews(limit: 4, sort: { fields: strapiId, order: DESC }) {
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

  const currentTitle = props.newsTitle || " "
  const filteredNews = data.news.nodes.filter(news => {
    return news.title !== currentTitle
  })

  return (
    <div className="recentNews">
      {filteredNews.map((item, index) => {
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
