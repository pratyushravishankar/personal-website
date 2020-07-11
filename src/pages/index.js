
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

// import { graphql } from 'gatsby'
// import PropTypes from "prop-types"
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


    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />





      < section className="text-center" >
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Pratyush Ravishankar | UNDER DEVELOPMENT.
        </h2>

        <p className="leading-loose">
          under development
        </p>
        <div className="py-4" >
          <h2 className="inline-block p-3 mb-4 text-2xl font-bold">
            Featured projects
          </h2>
          <ProjectRoll />
          {/* <div className="box-border h-screen max-w-full bg-gray-200"> */}
          <h2 className="inline-block p-10 mb-4 text-2xl font-bold">
            Favourite Things Right Now
            </h2>
          {/* <div className="box-content h-64 w-64 p-4 bg-gray-200">
              <div className="h-full w-full bg-gray-400"></div>
            </div> */}
          <div className="w-full">
            <FavouriteRoll />
            {/* </div> */}

          </div>
        </div>


        {/* <ul>{listItems}</ul> */}


      </section >
    </Layout >
  );
}











