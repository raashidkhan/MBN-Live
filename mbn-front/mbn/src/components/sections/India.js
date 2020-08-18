import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../cards/UpdownCard"
import { Link } from "gatsby"
const India = () => {
  const data = useStaticQuery(graphql`
    {
      indiaNews: allStrapiNews(
        filter: { category: { eq: "India" } }
        sort: { fields: strapiId, order: DESC }
        limit: 9
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

  // const [count, setCount] = React.useState(1)
  // const handleCount = () => {
  //   setCount(count + 1)
  // }
  // const handleLess = () => {
  //   setCount(1)
  // }
  //{data.indiaNews.nodes.slice(0, count).map((item, index)
  return (
    <section id="indiaNews">
      <h2 className="indiaNews-heading sectionTitle">India</h2>
      <div className="indiaNews">
        {data.indiaNews.nodes.map((item, index) => {
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
        aria-label="More India News"
        to="/India"
      >
        More
        <span></span>
      </Link>
    </section>
  )
}

export default India
