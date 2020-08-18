import React from "react"
import { Logo } from "../components/Logo"
import facebook from "../images/facebook.svg"
import yt from "../images/yt.svg"
import twitter from "../images/twitter.svg"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footerLogo">
          {/* <img className="scale-image" src={Logo} alt="MBN Logo" /> */}
          <Logo />
        </div>
        <p className="footerDesc">
          MBN Live- Latest News and Headlines. Breaking News from Mumbai, India,
          Politics, Sports and Entertainment. For more information mail us at:
          <br />
          <a href="mailto:info@mbnlive.in">info@mbnlive.in</a>
        </p>
        <div className="footerSocial">
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
      </div>
      <div className="footerCopyright" data-nosnippet>
        © All Rights Reserved {new Date().getFullYear()} | Mumbai Breaking News
        Live
      </div>
    </footer>
  )
}

export default Footer

// © {new Date().getFullYear()}
