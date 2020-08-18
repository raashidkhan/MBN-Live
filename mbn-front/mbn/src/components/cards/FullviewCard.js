import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { motion } from "framer-motion"

const FullviewCard = ({ image, title, slug, date, category }) => {
  const slideLeft = {
    initial: {
      x: "100vw",
    },
    final: {
      x: "0",

      transition: {
        type: "tween",

        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        type: "tween",

        duration: 0.3,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  }

  return (
    <Link to={`/${category}/${slug}`} className="fullviewCard">
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fullviewCard-image"
      >
        <Image className="scale-image" fluid={image}></Image>
      </motion.div>
      <div className="fullviewCard-content">
        <motion.h1
          variants={slideLeft}
          initial="initial"
          animate="final"
          exit="exit"
          className="heading-secondary margin-bottom-small text-white"
        >
          {title}
        </motion.h1>

        <div className="fullviewCard-content--footer">
          <span className="dateTag">{date}</span>
          <h4 className="categoryTag margin-bottom-small">{category}</h4>
        </div>
      </div>
    </Link>
  )
}

export default FullviewCard
