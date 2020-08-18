import React from "react"
import { Link } from "gatsby"
import { Logo, Youtube } from "../components/Logo"
import facebook from "../images/facebook.svg"
// import yt from "../images/yt.svg"
import twitter from "../images/twitter.svg"

const Navbar = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const today = new Date()
  return (
    <>
      <nav className="navbar">
        {/* <li className="navbar-social">
          <a href="https://www.facebook.com/mbn.live.319">
            <img src={facebook} alt="mbn facebook link" />
          </a>
          <a href="https://www.youtube.com/channel/UCCbcVzfFj5B8eo3r_VFpkTA">
            <img src={yt} alt="mbn youtube link" />
          </a>
          <a href="https://twitter.com/LiveMbn">
            <img src={twitter} alt="mbn twitter link" />
          </a>
        </li> */}
        <div className="navbar-logo">
          <Link to="/">
            {/* <img src={Logo} alt="" /> */}
            <Logo />
          </Link>
        </div>

        <p className="navbar-dateTime">
          {today.toLocaleDateString("en-US", options)}
        </p>
      </nav>
    </>
  )
}

export default Navbar
