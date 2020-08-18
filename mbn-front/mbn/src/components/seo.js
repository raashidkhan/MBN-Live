import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  isArticle,
  meta,
  title,
  image,
  author,
  articleLang,
  articleDate,
  articleBody,
  articleUrl,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            keywords
            siteDescription
            siteAuthor
            twitterUsername
            siteUrl
            siteImage
            siteLogo
          }
        }
      }
    `
  )
  const {
    siteTitle,
    siteDescription,
    siteAuthor,
    siteUrl,
    siteImage,
    siteLogo,
  } = site.siteMetadata

  const metaDescription = description || siteDescription

  // ======================================
  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    mainEntityOfPage: siteUrl,
    description: siteDescription,
    name: siteTitle,
    author: {
      "@type": "Person",
      name: siteAuthor,
    },
    copyrightHolder: {
      "@type": "Person",
      name: siteAuthor,
    },
    copyrightYear: "2020",
    creator: {
      "@type": "Person",
      name: siteAuthor,
    },
    publisher: {
      "@type": "Person",
      name: siteAuthor,
    },
    image: {
      "@type": "ImageObject",
      url: siteImage,
    },
  }

  const itemListElement = [
    {
      "@type": "ListItem",
      item: {
        "@id": siteUrl,
        name: "Homepage",
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (isArticle) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: author,
      },
      copyrightHolder: {
        "@type": "Person",
        name: author,
      },
      copyrightYear: "2020",
      creator: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Organization",
        name: "MBN Live",
        logo: {
          "@type": "ImageObject",
          url: siteLogo,
        },
      },
      datePublished: articleDate,
      dateModified: articleDate,
      description: description,
      headline: title,
      inLanguage: articleLang,
      url: articleUrl,
      name: title,
      image: {
        "@type": "ImageObject",
        url: image,
      },
      mainEntityOfPage: articleUrl,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      "@type": "ListItem",
      item: {
        "@id": articleUrl,
        name: title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
  }

  // ======================================

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            name: "keywords",
            content: site.siteMetadata.keywords,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `image`,
            content: image || `${site.siteMetadata.image}`,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.twitterUsername,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `twitter:image`,
            content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
          },
        ].concat(meta)}
      />
      <Helmet>
        {!isArticle && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {isArticle && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  // canonical: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
