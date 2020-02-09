import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import Questions from "../components/sections/questions"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Navigation />
    <Header />
    <Questions />
    <Footer />
  </Layout>
)

export default IndexPage
