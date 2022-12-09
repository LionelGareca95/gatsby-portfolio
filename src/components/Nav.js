import React from 'react'
import liodev from '../images/liodev.png'
import styled from 'styled-components';
import {Link} from 'react-scroll'


const Container = styled.div`
    background: #101213;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;

`;

const List = styled.div`
    display: flex;
    list-style: none;
    font-size: 1.5rem;   
    
    &:hover {
      color: #D14627;
    }
`;
const img = {
  width: 100,  
}
const lista = {
  "padding-right": 30,
  color: "#fff ",
  
}


const Nav = () => {
  return (
   
    <Container>
      <img style={img} src={liodev} alt="logo lio" />

         <List>
            <Link style={lista} to="tecnologhies" spy={true} smooth={true} offset={50} duration={600}>About</Link>
            <Link style={lista} to="project" spy={true} smooth={true} offset={50} duration={500}>Project</Link>
            <Link style={lista} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>            
        </List>        
    </Container>
  
  )
}
 
export default Nav
