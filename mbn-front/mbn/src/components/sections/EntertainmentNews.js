import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CardOne from "../cards/UpdownCard"
import CardTwo from "../cards/SidebysideCard"
import { Link } from "gatsby"

const EntertainmentNews = () => {
  const data = useStaticQuery(graphql`
    {
      EntNews: allStrapiNews(
        filter: { category: { eq: "Entertainment" } }
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

  // console.log(window.innerWidth)

  // let limit = 3

  // if (window.innerWidth <= 600) {
  //   limit = 5
  // } else {
  //   limit = 3
  // }

  return (
    <section id="entertainmentNews">
      <h2 className="sectionTitle indiaNews-heading">Entertainment</h2>
      <div className="entertainmentNews">
        {/* 2 Upside Cards */}
        <div key="index" className="entertainmentNews-row1">
          {data.EntNews.nodes.slice(0, 3).map((item, index) => {
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
        {/* 4 sidebysidecards */}
        <div className="entertainmentNews-row2">
          {data.EntNews.nodes.slice(3).map((item, index) => {
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
        aria-label="More Entertainment News"
        to="/Entertainment"
      >
        More
        <span></span>
      </Link>
    </section>
  )
}

export default EntertainmentNews
