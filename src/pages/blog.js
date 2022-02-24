import React from 'react'
import Layout from '../components/Layout/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle='My Blog Posts'>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.datePublishied}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___datePublishied, order: DESC}) {
      nodes {
        frontmatter {
          datePublishied
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage
