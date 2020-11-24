import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import Infoblock from "../components/reusable/Infoblock"
import Dualinfoblock from "../components/reusable/Dualinfoblock"
import Coursecart from "../components/Cart/Coursecart"

const IndexPage = ({data}) => (
  <Layout>

    <SEO title="Home" />
    
    <HeroSection 
    img={data.img.childImageSharp.fluid}
    title="i write code"
    subtitle="Learncodeonline.in"
    heroclass="hero-background"
    />

    <Infoblock heading="About us"/>
    
    <Coursecart courses={data.courses} />

    <Dualinfoblock heading="Our Team"/>
    
    </Layout>
)

export const query = graphql `
{
  img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
  courses: allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
