import React from 'react'
import devicon from 'devicon'
import styled from 'styled-components'

const CodeIcons = styled.div`
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
   
    
`;
const items = {
    "font-size": 80,
    "margin": 19
}
const icon = {
 color: "#fff",
  "font-size": 60,
  "margin": 19
}

const Title = styled.h1`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
`
const Icons = () => {

  return (
    <>
      <Title id='tecnologhies'>Skills</Title>
    <CodeIcons>   
        <i style={items} class="devicon-html5-plain-wordmark colored"></i>      
        <i style={items} class="devicon-css3-plain-wordmark colored"></i>  
        <i style={items} class="devicon-sass-original colored"></i>
        <i style={items} class="devicon-javascript-plain colored"></i>
        <i style={items} class="devicon-react-original-wordmark colored"></i>
        <i style={items} class="devicon-nodejs-plain colored"></i>
        <i style={items} class="devicon-mongodb-plain-wordmark colored"></i>    
        <i style={items} class="devicon-git-plain-wordmark colored"></i>    
        <i style={icon} class="devicon-github-original-wordmark colored"></i>
        <i style={items} class="devicon-gatsby-plain colored"></i>      
    </CodeIcons>

    </>
  )
}

export default Icons