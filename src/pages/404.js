import React from "react"
import Layout from "../components/Layout"
import notfound from '../images/notfound.webp'
import styled from "styled-components"

export default function NotFound() {

  const Container = styled.div`
    height: 100vh;
    width: 100%;
  `
  return (
    <Layout>
      <Container>
          <img src={notfound} alt="404" loading="lazy" />
      </Container>
    </Layout>
  )
}