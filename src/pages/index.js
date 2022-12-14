import * as React from "react"
import Nav from "../components/Nav"
import styled from 'styled-components';
import Layout from "../components/Layout"
import Main from "../components/Main";
import Icons from "../components/Icons";
import Project from "../components/Project";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <Layout>
      <Nav/>
      <Main />
      <Icons />
      <Project />
      <Contact />
    </Layout>
    
  )
}

export default IndexPage

export const Head = () => <title>LioDev</title>
