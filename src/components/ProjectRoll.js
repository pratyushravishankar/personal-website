import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
// import PreviewCompatibleImage from './PreviewCompatibleImage'
import ProjectTile from './ProjectTile.re'


export default function ProjectRoll() {

  // const { allMarkdownRemark } = data
  // const { edges: posts } = allMarkdownRemark

  return (
    <StaticQuery
      query={graphql`
            query ProjectQuery {
                allMarkdownRemark(filter: {frontmatter: {key: {eq: "project"}, featuredpost: {eq: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
                  edges {
                    node {
                      id
                      frontmatter {
                        key
                        title
                        tech
                        ext
                      }
                      excerpt
                    }
                  }
                }
              }
              
            `}
      render={data => (

        <div className="flex flex-wrap flex-col sm:flex-row mx-2">

          {data.allMarkdownRemark.edges &&
            data.allMarkdownRemark.edges.map(({ node: post }) => (
              <ProjectTile key={post.id} post={post} />
            ))}
        </div>
      )}
    />
  )
}



