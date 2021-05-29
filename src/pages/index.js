// Step 1: Import React
import * as React from 'react'
import Layout from './layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to my Gatsby site!</p>
      <h6>I created this using Gatsby.</h6>
      <StaticImage 
      src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
      alt="Free bird"
      />
      
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage