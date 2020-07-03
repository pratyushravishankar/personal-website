import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
// import PreviewCompatibleImage from './PreviewCompatibleImage'
import FaveTile from './FaveTile.re'


export default function ProjectRoll() {

    // const { allMarkdownRemark } = data
    // const { edges: posts } = allMarkdownRemark

    return (
        <StaticQuery
            query={graphql`
                query ProjectQuery {
                    allMarkdownRemark(filter: {frontmatter: {key: {eq: "project"}}}, sort: {order: DESC, fields: frontmatter___date}) {
                    edges {
                        node {
                        id
                        frontmatter {
                            key
                            title
                        }
                        excerpt
                        }
                    }
                    }
                }
            `}
            render={data => (

                <div className="grid gap-4 grid-cols-3">







                    {data.allMarkdownRemark.edges &&
                        data.allMarkdownRemark.edges.map(({ node: post }) => (
                            // <div className="w-1/2" key={post.id}>
                            <FaveTile key={post.id} post={post} />
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



