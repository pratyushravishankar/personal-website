import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
// import PreviewCompatibleImage from './PreviewCompatibleImage'
import FaveTile from './FaveTile.re'


export default function FavouriteRoll() {

    // const { allMarkdownRemark } = data
    // const { edges: posts } = allMarkdownRemark

    return (
        <StaticQuery
            query={graphql`
                query FavouriteQuery {
                    allMarkdownRemark(filter: {frontmatter: {key: {eq: "favourite"}}}, sort: {order: DESC, fields: frontmatter___date}) {
                    edges {
                        node {
                        id
                        frontmatter {
                            key
                            title
                            image {
                                childImageSharp {
                                  fluid(maxWidth: 200, maxHeight: 200, quality:92, duotone: {
                                    highlight: "#FFD400",
                                    shadow: "#D90368",                                  
                                  }) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                              
                        }
                        excerpt
                        }
                    }
                    }
                }


            `}
            render={data => (
                <div className="flex flex-wrap flex-col sm:flex-row sm:mx-2">
                    {data.allMarkdownRemark.edges &&
                        data.allMarkdownRemark.edges.map(({ node: post }) => (
                            <FaveTile key={post.id} post={post} />
                        ))}

                </div>




            )}
        />
    )
}







