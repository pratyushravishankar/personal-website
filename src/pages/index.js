
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
// import Ripple from "../images/ripple.svg";

// import { graphql } from 'gatsby'
// import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import FavouriteRoll from "../components/FavouriteRoll";
import ProjectRoll from "../components/ProjectRoll";

export default function IndexPage() {

  // const { allMarkdownRemark } = data
  // const { edges } = allMarkdownRemark

  // const listItems = edges.map((item) =>
  //   <li key={item.node.frontmatter.path}>{item.node.frontmatter.path}</li>
  // );

  // console.log(data)
  return (
    <StaticQuery
      query={graphql`
      query IndexQuery {
        markdownRemark(frontmatter: {key: {eq: "index-page"}}) {
          id
          frontmatter {

            favourites {
              title
            }
            projects {
              title
            }
          }
        }
      }
      
      
        
      `}
      render={data => (

        <Layout>
          <SEO
            title="Pratyush Ravishankar"
          />





          {/* < section className="text-ce nter" > */}
          {/* <img
        alt="Cat and human sitting on a couch"
        className="block w-1/2 mx-auto mb-8"
        src={catAndHumanIllustration}
      /> */}

          <div className="w-full min-h-3/4-screen bg-cyber-yellow px-4 py-2 flex flex-col justify-center items-center ">
            <h1 className="break-all p-3 mb-4 text-7xl text-cadet max-w-full rounded-lg lg:text-10xl font-heading">
              Pratyush Ravishankar//
          <a
                className="hover:text-rose"
                href="https://www.linkedin.com/in/pratyush-ravishankar-a5391615a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
          </a>
          ~
          <a
                className="hover:text-rose"
                href="https://github.com/pratyushravishankar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
          </a>

          ~
          <a
                className="hover:text-rose"
                href="/resumewebsite.pdf" download
                target="_blank"
                rel="noopener noreferrer"
              >
                Resumé
          </a>
            </h1>

            {/* <p className="bg-bluedark text-aquamarine">
          under development
        </p> */}
          </div>

          <main className="mt-16 w-full flex flex-col justify-center items-center">

            <div className="bg-scroll" style={{ background: "url('../images/cat-and-human-illustration.svg')" }}>
              <div className="w-full flex flex-col bg-white mt-16 justify-center items-left">
                <div className="max-w-6xl mx-4">
                  <h2 className="font-heading text-xl text-6xl text-cadet border-b-4 border-celadon-green "> {data.markdownRemark.frontmatter.projects.title}</h2>
                </div>

                <div className="max-w-6xl">
                  <ProjectRoll />
                </div>

              </div>
            </div>

            <div className="w-full flex flex-col bg-cadet mt-16 justify-center items-center">
              <div className="max-w-6xl mx-4">
                <h2 className="font-heading text-xl text-6xl text-white border-b-4 border-celadon-green"> {data.markdownRemark.frontmatter.favourites.title} </h2>
              </div>

              <div className="max-w-6xl mb-16">
                <FavouriteRoll />
              </div>
            </div>


          </main>



          {/* <ul>{listItems}</ul> */}


          {/* </section > */}
        </Layout >
      )}
    />
  )
}





