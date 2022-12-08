import React from 'react'
import devicon from 'devicon'
import styled from 'styled-components'

const CodeIcons = styled.div`
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    padding: 50;
`;
const items = {
    "font-size": 60,
    "margin": 20
}
const Icons = () => {

  return (
    <CodeIcons>   
        <i style={items} class="devicon-html5-plain-wordmark colored"></i>      
        <i style={items} class="devicon-css3-plain-wordmark colored"></i>  
        <i style={items} class="devicon-sass-original colored"></i>
        <i style={items} class="devicon-javascript-plain colored"></i>
        <i style={items} class="devicon-react-original-wordmark colored"></i>
        <i style={items} class="devicon-nodejs-plain-wordmark colored"></i>
        <i style={items} class="devicon-mongodb-plain-wordmark colored"></i>    
        <i style={items} class="devicon-git-plain-wordmark colored"></i>    
        <i style={items} class="devicon-github-original-wordmark colored"></i>       
    </CodeIcons>
  )
}

export default Icons