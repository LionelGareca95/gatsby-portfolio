import React from 'react'
import programmer from '../images/programmer.svg'
import styled from 'styled-components';
import layout from '../styles/layout.css'

const ContainerMain = styled.div`
   min-heigth: 60vh;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
`;

const img = {
  width: 350,
  heigth: 350,
}
const div = {
  "padding-top": 80,
  "margin": "0 auto"
}
const span = {
  color: "#D14627",
  "font-size": 35
}
const title = { 
  "font-size": 25
}

const Main = () => {
  return (
    <ContainerMain>   
        <div style={div}>
            <h1 style={title}><span className='hand'>✌🏻</span> Hi, Mi Name Is <span style={span}>Lionel Gareca</span></h1>
            <p style={title}>I am Front-End Developer</p>
        </div>
        <div style={div}>
          <img style={img} src={programmer} alt="Img Programador" loading='lazy' />
        </div>
        <div>
        <a href="#">
          <div id="mouse-scroll">
            <div class="mouse">
              <div class="mouse-in"></div>
            </div>
            <div>
                <span class="down-arrow-1"></span>
                <span class="down-arrow-2"></span>
            </div>
          </div>
          </a>
        </div>
    </ContainerMain>
  )
}

export default Main