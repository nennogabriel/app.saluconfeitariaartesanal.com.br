const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // const cmsPages = await graphql(`
  //   {
  //     allMdx(filter: { frontmatter: { templateKey: { glob: "pages/*" } } }) {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             templateKey
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (cmsPages.errors) {
  //   reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for cmsPages')
  // }

  // cmsPages.data.allMdx.edges.forEach(({ node }) => {
  //   const { templateKey, slug } = node.frontmatter
  //   createPage({
  //     path: slug,
  //     component: templateKey
  //       ? path.resolve(`./src/templates/${templateKey}/index.tsx`)
  //       : path.resolve(`./src/templates/default.tsx`),
  //     context: { id: node.id },
  //   })
  // })

  // const cmsLojas = await graphql(`
  //   {
  //     allMdx(
  //       filter: { frontmatter: { templateKey: { glob: "lojas" } } }
  //     ) {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             templateKey
  //             title
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (cmsLojas.errors) {
  //   reporter.panicOnBuild(
  //     '🚨  ERROR: Loading "createPages" query for cmsLojas'
  //   )
  // }

  // cmsLojas.data.allMdx.edges.forEach(({ node }) => {
  //   const { templateKey, slug } = node.frontmatter
  //   createPage({
  //     path: `/loja${slug}`,
  //     component: path.resolve(`./src/templates/${templateKey}/index.tsx`),
  //     context: { category: slug, id: node.id },
  //   })
  // })

  // const cmsBlogPosts = await graphql(`
  //   {
  //     allMdx(filter: { frontmatter: { templateKey: { glob: "blog/post" } } }) {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             templateKey
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (cmsBlogPosts.errors) {
  //   reporter.panicOnBuild(
  //     '🚨  ERROR: Loading "createPages" query for cmsBlogPosts'
  //   )
  // }

  // cmsBlogPosts.data.allMdx.edges.forEach(({ node }) => {
  //   const { templateKey, slug } = node.frontmatter
  //   createPage({
  //     path: `/blog${slug}`,
  //     component: path.resolve(`./src/templates/${templateKey}.tsx`),
  //     context: { categories: cmsBlogCategories, id: node.id },
  //   })
  // })
}
