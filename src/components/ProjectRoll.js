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

                // <div className="grid gap-4 grid-cols-3">
                <div className="flex flex-wrap flex-col sm:flex-row mx-2">







                    {data.allMarkdownRemark.edges &&
                        data.allMarkdownRemark.edges.map(({ node: post }) => (
                            // <div className="w-1/2" key={post.id}>
                            <ProjectTile key={post.id} post={post} />
                            /* // <li key={post.id}> lol ß</li> */

                            // <FaveTile post={post} />
                            // </div>


                        ))}

                </div>
            )}
        />
        // <div>
        //     <p>
        //         lol
        //     </p>
        // </div>
    )
}



