// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to my Gatsby site!</p>
      <h6>I created this using Gatsby.</h6>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage