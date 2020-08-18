import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"
import RecentNews from "../components/sections/RecentNews"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import whatsapp from "../images/whatsapp.svg"
// import { motion } from "framer-motion"

const NewsTemplate = ({ data }) => {
  const pageUrl = `https://mbnlive.in/${data.news.category}/${data.news.slug}`
  const pageDesc = data.news.article.split(" ").slice(0, 100).join(" ")
  const pageImage = `https://mbnlive.in${data.news.image.childImageSharp.fluid.src}`
  return (
    <>
      <Layout>
        <SEO
          title={`MBN Live | ${data.news.title}`}
          description={pageDesc}
          image={pageImage}
          author={data.news.author}
          articleDate={data.news.date}
          articleBody={data.news.article}
          articleUrl={pageUrl}
          isArticle={true}
          articleLang="hi"
        />
        <div id="singleNews">
          <div className="singleNews">
            <div className="singleNews-content">
              <article className="newsArticle">
                <h4 className="categoryTag">{data.news.category}</h4>

                <div className="newsArticle-image margin-bottom-small">
                  <Image fluid={data.news.image.childImageSharp.fluid} />
                </div>
                <div className="newsArticle-credits">
                  {data.news.author === "Desk Report" ? (
                    <span className="authorTag">{data.news.author}</span>
                  ) : (
                    <span className="authorTag">By {data.news.author}</span>
                  )}
                  <div className="shareBtns">
                    <a
                      href={`https://www.facebook.com/sharer.php?u=${pageUrl}&p[title]=${data.news.title}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={facebook} alt="Share on Facebook" />
                    </a>
                    <a
                      href={`http://twitter.com/intent/tweet/?text=${data.news.title} via @LiveMbn&url=${pageUrl}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={twitter} alt="Tweet" />
                    </a>
                    <a
                      href={`whatsapp://send/?text=${data.news.title}%20${pageUrl}`}
                    >
                      <img src={whatsapp} alt="Share on Whatsapp" />
                    </a>
                  </div>
                </div>

                <p className="authorTag margin-bottom-medium">
                  {data.news.date}
                </p>
                <h1 className="heading-secondary margin-bottom-small">
                  {data.news.title}
                </h1>
                <article className="newsArticle-para">
                  <ReactMarkdown source={data.news.article}></ReactMarkdown>
                </article>
              </article>
            </div>
            <div className="singleNews-recents">
              <h2 className="heading-secondary margin-bottom-small text-theme-color">
                Recent News
              </h2>
              <RecentNews></RecentNews>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query GetSingleNews($slug: String) {
    news: strapiNews(slug: { eq: $slug }) {
      article
      author
      category
      date
      title
      slug
      image {
        childImageSharp {
          fluid {
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

//  <span className="authorTag">
//                   data.news.author === "Desk Report" ? ${data.news.author} : By
//                   ${data.news.author}
//                 </span>

export default NewsTemplate
