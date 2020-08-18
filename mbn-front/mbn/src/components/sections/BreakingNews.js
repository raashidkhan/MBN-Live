import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BreakingNews = () => {
  const data = useStaticQuery(graphql`
    {
      news: allFeedGoogleNews(limit: 2) {
        nodes {
          title
          link
          isoDate(fromNow: true)
        }
      }
    }
  `)

  // const [toggle, setToggle] = React.useState(true)

  // const handleToggle = () => {
  //   setToggle(!toggle)
  //   console.log(toggle)
  // }

  return (
    <div className="breakingNewsContainer" data-nosnippet="true">
      <div className="breakingNewsWrapper slider">
        {/* <button>
          <span onClick={handleToggle}>upDown</span>
        </button> */}
        <h2>BREAKING NEWS</h2>
        <div
          className="breakingNews slideTrack"
          // className={`breakingNews slideTrack ${
          //   toggle ? "closeToggle" : "openToggle"
          // }`}
        >
          {data.news.nodes.map((item, index) => {
            return (
              <div key={index}>
                <a href={item.link}>{item.title}</a>
              </div>
            )
          })}
          <p>News Source: Google News</p>
        </div>
      </div>
    </div>
  )
}

export default BreakingNews
