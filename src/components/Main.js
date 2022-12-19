import React from 'react'
import programmer from '../images/programador.gif'
import styled from 'styled-components';
import {Link} from 'react-scroll'
import Background from './Background';


const ContainerMain = styled.div`
   margin: 132px auto;
   height: 50vh;
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   align-items: center;
   justify-content: center;
   @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
 
`


const img = {
  "max-width": 400,
  heigth: 350,
}

const Main = () => {
  return (

    <ContainerMain>
        <Description>
            <h2><span>👋</span>  Hi, mi name is</h2> 
            <h2>&nbsp;&nbsp; &nbsp; &nbsp;Lionel Gareca</h2>       
            <h1 className='first title'>Front-End Developer</h1>
            <h1 className='second title'>Front-End Developer</h1>
        </Description>
        <Description >
          <img style={img} src={programmer} alt="Img Programador" loading='lazy' />
        </Description>
        
        <Link to="tecnologhies" spy={true} smooth={true} offset={50} duration={600}>
          <div id="mouse-scroll">
            <div className="mouse">
              <div className="mouse-in"></div>
            </div>
            <div>
                <span className="down-arrow-1"></span>
                <span className="down-arrow-2"></span>
            </div>
          </div>
          </Link>         
    </ContainerMain>
    
  )
}

export default Main