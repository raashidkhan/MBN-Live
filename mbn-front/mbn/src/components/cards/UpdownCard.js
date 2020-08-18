import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
const UpdownCard = ({ image, category, title, date, slug }) => {
  return (
    <Link to={`/${category}/${slug}`} className="updownCard">
      <div className="updownCard-image">
        <Image className="scale-image" fluid={image}></Image>
      </div>
      <div className="updownCard-content">
        <h2 className="heading-tertiary">{title}</h2>

        <p className="dateTag">{date}</p>
      </div>
    </Link>
  )
}

export default UpdownCard
