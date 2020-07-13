
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

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





      {/* < section className="text-ce nter" > */}
      {/* <img
        alt="Cat and human sitting on a couch"
        className="block w-1/2 mx-auto mb-8"
        src={catAndHumanIllustration}
      /> */}

      <div className="w-full h-screen bg-bluedarkest px-4 py-2 flex flex-col justify-center items-center">
        <h2 className="inline-block p-3 mb-4 text-6xl font-bold bg-bluedark text-aquamarine w-full max-w-4xl rounded-lg">
          Pratyush Ravishankar | UNDER DEVELOPMENT.
        </h2>

        <p className="bg-bluedark text-aquamarine">
          under development
        </p>
      </div>

      <main className="mt-16 w-full flex flex-col justify-center items-center">
        <div className="max-w-4xl mx-4">
          <h2 className="font-bold text-xl text-6xl text-bluedarkest border-b-4 border-aquamarine"> Featured projects </h2>
        </div>

        <div className="max-w-6xl">
          <ProjectRoll />
        </div>

        <div className="max-w-4xl mx-4">
          <h2 className="font-bold text-xl text-6xl text-bluedarkest border-b-4 border-aquamarine"> Favourite Things Right Now </h2>
        </div>

        <div className="max-w-6xl mb-16">
          <FavouriteRoll />
        </div>

      </main>



      {/* <ul>{listItems}</ul> */}


      {/* </section > */}
    </Layout >
  );
}











