import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import homeStyles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={homeStyles.mainHeading}>More than a club...</h1>
    <p>
      Claremont Gorillas are a football team who play in the Wimbledon &
      District League.
    </p>
  </Layout>
)

export default IndexPage
