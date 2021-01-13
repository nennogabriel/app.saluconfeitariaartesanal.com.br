import React from "react"
import { CartButton, Container, DefaultLayout } from "../components"
import { graphql } from "gatsby"
import CatalogItem from "../components/CatalogItem"
import { Box } from "@chakra-ui/react"

interface TemplateProps {
  data: {
    products: Array<{
      id: string
      title: string
      slug: string
      category: string
      image?: string
      price: number
    }>
    body: string
  }
}

const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <Container>
      <CartButton />
      <Box my={8}>
        {data.products.map(product => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </Box>
      <CartButton />
    </Container>
  )
}

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { body } = data.mdx
  const products = data.allMdx.edges.map((edge: any) => ({
    ...edge.node.frontmatter,
    id: edge.node.id,
  }))

  return (
    <DefaultLayout>
      <Template
        data={{
          products,
          body,
        }}
      />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "produtos" } } }
      sort: { fields: frontmatter___category }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            category
            image
            price
          }
        }
      }
    }

    mdx(id: { eq: $id }) {
      body
      frontmatter {
        slug
        title
        metadata {
          title
          description
          dateModified
          datePublished
          image
        }
      }
    }
  }
`

export { pageQuery, Template }

export default PagesLayout
