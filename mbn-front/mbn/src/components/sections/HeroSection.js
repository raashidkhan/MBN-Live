import React, { useState } from "react"
import FullViewCard from "../cards/FullviewCard"
import SidebySide from "../cards/SidebysideCard"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
const HeroSection = () => {
  const data = useStaticQuery(graphql`
    {
      news: allStrapiNews(limit: 6, sort: { fields: strapiId, order: DESC }) {
        nodes {
          author
          category
          image {
            childImageSharp {
              fluid(quality: 90) {
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
  const limit = data.news.nodes.length - 4
  const [count, setCount] = useState(0)

  const handleNext = () => {
    count <= limit ? setCount(count + 1) : setCount(0)
  }

  const handlePrev = () => {
    count <= 0 ? setCount(limit + 1) : setCount(count - 1)
  }

  return (
    <div className="heroSection">
      <div className="latestNews">
        <AnimatePresence exitBeforeEnter>
          <motion.div className="latestNews-col-1" key={count}>
            <button
              className="btn-Next"
              aria-label="next news"
              onClick={handleNext}
            >
              <span></span>
            </button>
            <button
              className="btn-Prev"
              aria-label="previous news"
              onClick={handlePrev}
            >
              <span></span>
            </button>

            <FullViewCard
              key={count}
              image={data.news.nodes[count].image.childImageSharp.fluid}
              title={`${data.news.nodes[count].title}`}
              date={`${data.news.nodes[count].date}`}
              category={`${data.news.nodes[count].category}`}
              slug={`${data.news.nodes[count].slug}`}
            />
          </motion.div>
        </AnimatePresence>
        <div className="latestNews-col-2">
          <h2 className="latestNews-heading">Latest News</h2>
          {data.news.nodes.slice(4).map((item, index) => {
            return (
              <SidebySide
                key={index}
                category={item.category}
                title={item.title}
                date={item.date}
                image={item.image.childImageSharp.fluid}
                slug={item.slug}
              />
            )
          })}
        </div>
      </div>
      <div className="extra"></div>
    </div>
  )
}

export default HeroSection
