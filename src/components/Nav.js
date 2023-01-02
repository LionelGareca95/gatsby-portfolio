import React from 'react'
import logo from '../images/logo.png'
import styled from 'styled-components';
import {Link} from 'react-scroll'
import { FaBars } from 'react-icons/fa'


const toggleMenu = () => {
  const menu = document.querySelector('.nav-menu')
  menu.classList.toggle('nav-menu_active')
}

const closeMenu = () => {
  const menu = document.querySelector('.nav-menu')
  menu.classList.remove('nav-menu_active')
}

const Logo = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-bottom: .1rem;
    width: 3rem;
    
  }
  
  p {
    color: #D14627;
    font-size: 1.4rem;
    } 
`;

const Navbar = styled.div`
font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) { 
    padding: 0 2rem;
    justify-content: space-between;
  }

`;

const Button = styled.button`
  display: none;
  cursor: pointer;
  background: none;
  border: none;
  @media (max-width: 768px) { 
    z-index: 999;
    display: block;;
  }
   
`;

const Nav = () => {
  return (
   
    <>
      <Navbar>
      <Logo>
        <img src={logo} className='logo' alt="Logo"/>
          <p className='logo-p'>Lio Dev</p>
      </Logo>
        
        <ul className='nav-menu'>
          <li className='nav-menu-item'>
            <Link to="projects" spy={true} smooth={true} offset={10} duration={600} className='nav-menu-link' onClick={() => closeMenu()}>
              Project
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to="skills" spy={true} smooth={true} offset={10} duration={800} className='nav-menu-link' onClick={() => closeMenu()}>
              Skills
            </Link>
          </li>
          <li className='nav-menu-item'>
            <Link to="contact" spy={true} smooth={true} offset={10} duration={1000} className='nav-menu-link' onClick={() => closeMenu()}>
              Contact
            </Link>
          </li>
          </ul>  
          <Button
					onClick={() => {
						toggleMenu()
					}}
				>
					<FaBars size={30} className='hamburguesa'/>
				</Button>   

        </Navbar>
    </>
    
  )
}
 
export default Nav
