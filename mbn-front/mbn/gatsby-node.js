const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetNews {
      news: allStrapiNews {
        nodes {
          slug
          category
        }
      }
      categories: allStrapiNews {
        nodes {
          category
        }
      }
    }
  `)

  result.data.news.nodes.forEach(item => {
    createPage({
      path: `/${item.category}/${item.slug}`,
      component: path.resolve(`src/templates/news-template.js`),
      context: {
        slug: item.slug,
      },
    })
  })

  result.data.categories.nodes.forEach(category => {
    createPage({
      path: `/${category.category}`,
      component: path.resolve(`src/templates/category-page.js`),
      context: {
        category: category.category,
      },
    })
  })
}
