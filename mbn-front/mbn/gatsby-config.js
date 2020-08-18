const cssnano = require("css-mqpacker")
const autoprefixer = require("autoprefixer")
const mqPacker = require("css-mqpacker")

module.exports = {
  siteMetadata: {
    siteTitle: `MBN Live | Mumbai Breaking News`,
    siteDescription: `Mumbai Breaking News provides daily news from Mumbai , India and world. A dedicated website for unbiased latest news and headlines. Get latest news on Entertainment, Sports , Politics , Technology and more`,
    siteAuthor: `@mbnlive`,
    keywords: `Breaking News, Hindi News(हिंदी समाचार), Mumbai News , Latest Headlines, Mumbai Latest News `,
    twitterUsername: "@mbnlive",
    siteImage: "/twitter-card.jpg",
    siteUrl: "https://www.mbnlive.in",
    siteLogo: `src/images/logo.svg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://mbnlive.in`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer(),
          cssnano({
            preset: [
              "default",
              {
                autoprefixer: true,
                discardUnused: true,
                mergeIdents: true,
                zindex: true,
              },
            ],
          }),
          mqPacker({
            sort: true,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mumbai Breaking News`,
        short_name: `MBN`,
        start_url: `/`,
        background_color: `#323232`,
        theme_color: `#b4001c`,
        display: `fullscreen`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`News`],
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://news.google.com/rss/topics/CAAqBwgKMMqAmAsw9KmvAw?hl=en-IN&gl=IN&ceid=IN:en`,
        name: `GoogleNews`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/Politics/*`,
          `/Sports/*`,
          `/India/*`,
          `/Mumbai/*`,
          `/Entertainment/*`,
          `/Crime/*`,
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.mbnlive.in",
        sitemap: "https://www.mbnlive.in/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
