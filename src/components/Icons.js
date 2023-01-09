import React from 'react'
import devicon from 'devicon'
import styled from 'styled-components'
import logo from '../images/styled.svg'

const CodeIcons = styled.div`
    font-size: 4rem;
    gap: 1.5rem;
    padding: 3rem;
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    place-items: center;
    @media (min-width: 768px) { 
      grid-template-columns: repeat(3,minmax(0, 1fr))
    }
    @media (min-width: 1100px) { 
      grid-template-columns: repeat(4,minmax(0, 1fr))
    }
    box-shadow: var(--boxShadow); 
    border-radius: 1rem;
    background-color: var(--card);

`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 2rem;
`

const Container = styled.div`
 background-color: var(--gris);

`
const Iconos = styled.div`
  border-radius: 1rem;
  
`
const github = {
  color: "white"
}
const component = {
  width: "60px",
  
}
const Icons = () => {

  return (
    <Container>
      
      <Title id='skills'>Skills</Title>
    <CodeIcons>   
      <Iconos> <i className="devicon-html5-plain-wordmark colored"></i></Iconos> 
        <i className="devicon-css3-plain-wordmark colored"></i>  
        <i className="devicon-sass-original colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-react-original-wordmark colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-mongodb-plain-wordmark colored"></i>    
        <i className="devicon-git-plain-wordmark colored"></i>    
        <i style={github} className="devicon-github-original-wordmark colored"></i>
        <i className="devicon-gatsby-plain colored"></i>   
        <img src={logo} alt="styled" style={component}/>
    </CodeIcons>

    </Container>
  )
}

export default Icons