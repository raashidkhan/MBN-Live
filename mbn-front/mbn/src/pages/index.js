import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Hero from "../components/sections/HeroSection"
import India from "../components/sections/India"
import Mumbai from "../components/sections/MumbaiNews"
import Politics from "../components/sections/PoliticsNews"
import Crime from "../components/sections/CrimeNews"
import Sports from "../components/sections/Sports"
import Entertainment from "../components/sections/EntertainmentNews"
import BreakingNews from "../components/sections/BreakingNews"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="MBN Live | Mumbai Breaking News Live" isArticle={false} />

        <div className="heroLayout">
          <BreakingNews />
          <Hero />
        </div>

        <India />
        <Mumbai />
        <Politics />
        <Crime />
        <Sports />
        <Entertainment />
      </Layout>
    </>
  )
}

export default IndexPage
