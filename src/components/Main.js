import React from 'react'
import programmer from '../images/programmer.svg'
import styled from 'styled-components';
import layout from '../styles/layout.css'
import {Link} from 'react-scroll'

const ContainerMain = styled.div`
   margin: 150px auto;
   min-heigth: 60vh;
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   align-items: center;
   @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;

const img = {
  width: 340,
  heigth: 340,
}
const div = {
  "margin": "0 auto"
}
const span = {
  color: "#D14627",
  "font-size": 35
}
const title = { 
  "font-size": 25,
  "color": "#fff"
}

const Main = () => {
  return (
    <ContainerMain>   
        <div style={div}>
            <h1 style={title}><span id='hand'>✌🏻</span> Hi, Mi Name Is <span style={span}>Lionel Gareca</span></h1>
            <p style={title}>And I am Front-End Developer</p>
        </div>
        <div style={div}>
          <img style={img} src={programmer} alt="Img Programador" loading='lazy' />
        </div>
        <div>
        <Link to="tecnologhies" spy={true} smooth={true} offset={50} duration={600}>
          <div id="mouse-scroll">
            <div class="mouse">
              <div class="mouse-in"></div>
            </div>
            <div>
                <span class="down-arrow-1"></span>
                <span class="down-arrow-2"></span>
            </div>
          </div>
          </Link>
        </div>
    </ContainerMain>
  )
}

export default Main