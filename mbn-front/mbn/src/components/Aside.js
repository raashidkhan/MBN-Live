import React from "react"
import { Logo } from "../components/Logo"
import { Link } from "gatsby"
import facebook from "../images/facebook.svg"
import dragIcon from "../images/arrow-right.svg"
import yt from "../images/yt.svg"
import twitter from "../images/twitter.svg"
import Theme from "../components/Theme"
const Aside = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const today = new Date()
  // const linkContainer = React.useRef("")

  // const handleScroll = () => {
  //   Array.from(linkContainer.current.childNodes).forEach(item => {
  //     console.log(item)
  //     // item.style.transform = "translateX(-100%)"
  //   })
  // }

  return (
    <div className="asideContainer">
      <div className="asideWrapper">
        <div className="aside-logo">
          <Link to="/">
            {/* <img src={Logo} alt="" /> */}
            <Logo />
          </Link>
        </div>
        <p className="aside-dateTime">
          {today.toLocaleDateString("en-US", options)}
        </p>
        <p className="aside-darkModeToggle">
          <Theme />
        </p>
        <div className="aside-social">
          <a href="https://www.facebook.com/mbn.live.319">
            <img src={facebook} alt="mbn facebook link" />
          </a>
          <a href="https://www.youtube.com/channel/UCCbcVzfFj5B8eo3r_VFpkTA">
            <img src={yt} alt="mbn youtube link" />
          </a>
          <a href="https://twitter.com/LiveMbn">
            <img src={twitter} alt="mbn twitter link" />
          </a>
        </div>

        <ul
          // ref={linkContainer}
          className="asideContainer-item"
        >
          <li className="asideContainer-items--link">
            <Link
              to="/"
              className="asidelinks--item"
              activeClassName="activeLink"
            >
              Home
            </Link>
          </li>
          <li className="asideContainer-items--link">
            <Link
              to="/India"
              className="asidelinks--item"
              activeClassName="activeLink"
            >
              India
            </Link>
          </li>
          <li className="asideContainer-items--link">
            <Link
              to="/Mumbai"
              className="asidelinks--item"
              activeClassName="activeLink"
            >
              Mumbai
            </Link>
          </li>
          <li className="asideContainer-items--link">
            <Link
              to="/Politics"
              className="asidelinks--item"
              activeClassName="activeLink"
            >
              Politics
            </Link>
          </li>
          <li className="asideContainer-items--link">
            {" "}
            <Link
              to="/Crime"
              className="asidelinks--item"
              activeClassName="activeLink"
            >
              Crime
            </Link>
          </li>
          <li className="asideContainer-items--link">
            <Link
              to="/Sports"
              className="asidelinks--item"
              activeClassName="activeLink"
            >
              Sports
            </Link>
          </li>
          <li className="asideContainer-items--link">
            <Link
              to="/Entertainment"
              className="asidelinks--item"
              activeClassName="activeLink"
            >
              Entertainment
            </Link>
          </li>
        </ul>
        {/* <button onClick={handleScroll}> */}
        <img className="drag-icon" src={dragIcon} alt="drag for more links" />
        {/* </button> */}
      </div>
    </div>
  )
}

export default Aside
