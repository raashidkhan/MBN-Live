import React from "react"
import { graphql } from "gatsby"
import SideBySideCard from "../components/cards/SidebysideCard"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecentNews from "../components/sections/RecentNews"
import { motion } from "framer-motion"
const CategoryPage = ({ data }) => {
  const variants = {
    hidden: { x: "150px", opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        delay: i * 0.15,
        type: "spring",
        mass: 0.3,
        stiffness: 80,
        ease: [0.87, 0, 0.13, 1],
        restSpeed: 0.4,
      },
    }),
  }

  return (
    <>
      <Layout>
        <SEO
          title={`MBN Live | ${data.category.category}`}
          description={`Find latest news and headlines from ${data.category.category}`}
          isArticle={false}
        />

        <div className="categoryPage-layout">
          <div className="categoryNews">
            <h2 className="heading-secondary  margin-bottom-small">
              Latest news and headlines in {`${data.category.category}`}
            </h2>

            {data.news.nodes.map((item, i) => {
              return (
                <motion.div
                  key={item.strapiId}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="categoryNewsPost"
                >
                  <SideBySideCard
                    category={item.category}
                    title={item.title}
                    date={item.date}
                    image={item.image.childImageSharp.fluid}
                    slug={item.slug}
                  />
                </motion.div>
              )
            })}
          </div>
          <div className="categoryNews-recents">
            <h2 className="heading-secondary margin-bottom-small text-theme-color">
              Recent News
            </h2>
            <RecentNews></RecentNews>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query GetCategory($category: String) {
    news: allStrapiNews(
      filter: { category: { eq: $category } }
      sort: { fields: strapiId, order: DESC }
    ) {
      nodes {
        strapiId
        category
        author
        title
        slug
        date
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    category: strapiNews(category: { eq: $category }) {
      category
    }
  }
`

export default CategoryPage
