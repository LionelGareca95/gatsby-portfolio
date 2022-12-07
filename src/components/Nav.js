import React from 'react'
import liodev from '../images/liodev.png'
import styled from 'styled-components';


const Container = styled.div`
    background: #101213;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    font-size: 1.5rem;
   
`;
const img = {
  width: 100,  
}
const li = {
  "paddingRight": 30
}


const Nav = () => {
  return (
   
    <Container>
      <img style={img} src={liodev} alt="logo lio" />

         <List>
            <li style={li}>About</li>
            <li style={li}>Project</li>
            <li>Contact</li>            
        </List>        
    </Container>
  
  )
}
 
export default Nav
