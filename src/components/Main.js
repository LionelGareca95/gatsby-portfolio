import React from 'react'
import programmer from '../images/programador.gif'
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
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`
const img = {
  width: 340,
  heigth: 340,
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
        <Description >
            <h1 style={title}><span id='hand'>✌🏻</span> Hi, Mi Name Is <span style={span}>Lionel Gareca</span></h1>
            <p style={title}>And I am Front-End Developer</p>
        </Description>
        <Description >
          <img style={img} src={programmer} alt="Img Programador" loading='lazy' />
        </Description>
        
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
    </ContainerMain>
  )
}

export default Main