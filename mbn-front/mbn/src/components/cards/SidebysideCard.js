import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const SidebysideCard = ({ category, title, date, image, slug }) => {
  return (
    <Link to={`/${category}/${slug}`} className="sidebysideCard">
      <div className="sidebysideCard-image">
        <Image className="scale-image" fluid={image}></Image>
      </div>
      <div className="sidebysideCard-content">
        <h4 className="categoryTag">{category}</h4>
        <h2 className="heading-tertiary">{title}</h2>
        <span className="dateTag">{date}</span>
      </div>
    </Link>
  )
}

export default SidebysideCard
