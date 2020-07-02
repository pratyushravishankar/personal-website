import React from 'react'
// import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
// import PreviewCompatibleImage from './PreviewCompatibleImage'
// import FaveTile from './FaveTile.re'


export default function FavouriteRoll() {

    // const { allMarkdownRemark } = data
    // const { edges: posts } = allMarkdownRemark

    return (
        <StaticQuery
            query={graphql`
                query ProjectQuery {
                    allMarkdownRemark {
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
                <div>
                    {data.allMarkdownRemark.edges &&
                        data.allMarkdownRemark.edges.map(({ node: post }) => (
                            // <FaveTile key={post.id} post={post} />  
                            <li key={post.id}> yo!</li>
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




