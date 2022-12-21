import * as React from "react"
import Nav from "../components/Nav"
import styled from 'styled-components';
import Layout from "../components/Layout"
import Main from "../components/Main";
import Icons from "../components/Icons";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Background from "../components/Background";


const IndexPage = () => {
  return (
    <Layout>  
      <Nav/>
      <Main />
      <Background />
      <Icons />
      <Project />
      <Contact />
    </Layout>
    
  )
}

export default IndexPage

export const Head = () => <title>LioDev</title>
