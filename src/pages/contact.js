import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import Infoblock from "../components/reusable/Infoblock"
import Dualinfoblock from "../components/reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"


const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />

    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="About Learn Code Online"
    subtitle=""
    heroclass="about-background"
    />
    <Dualinfoblock heading="A message from our CEO"/>
    <Infoblock heading="About Our Vision"/>
    <Teamphotosection />
    </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
}
`

export default AboutPage
