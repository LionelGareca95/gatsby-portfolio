import React from 'react'
import programmer from '../images/programador.gif'
import styled from 'styled-components';
import {Link} from 'react-scroll'


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
const Arrow = styled.div`

@keyframes animated {
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(6px);
	}
}
@keyframes mouse-scroll {
	0% {
		opacity: 1;
	}
	50% {
		opacity: .5;
	}
	100% {
		opacity: 1;
	}
}

	position: absolute;
	margin: 0 auto;
	left: 50%;
	top: 100;
	transform: translateX(-50%);
	z-index: 9999;
	animation: mouse-scroll 1s infinite;
	span {
		display: block;
		width: 10px;
		height: 10px;
		transform: rotate(45deg);
		border-right: 3px solid var(--naranja);
		border-bottom: 3px solid var(--naranja);
		margin: 0 0 3px 5px;
	}
	.mouse {
		height: 35px;
		width: 20px;
		border-radius: 10px;
		transform: none;
		border: 2px solid var(--naranja);
		top: 180px;
    .mouse-in {
		height: 5px;
		width: 2px;
		display: block;
		margin: 5px auto;
		background: var(--naranja);
		position: relative;
		animation: animated 1.2s ease infinite;
	}
	}
	.down-arrow-1 {
		margin-top: 6px;
		animation: mouse-scroll 1s infinite;
	}
	.down-arrow-2 {
		animation: mouse-scroll 1s infinite;
		animation-delay: .2s;
		animation-direction: alternate;
	}
	
	.down-arrow-1 {
		animation-delay: .1s;
		animation-direction: alternate;
	}


`
const Main = () => {
  return (

    <ContainerMain>
        <Description>
            <h2><span className='span'>👋</span>  Hi, mi name is Lionel Gareca</h2> 
            <h2>I am a</h2> 

            <h1 className='first title'>Front-End Developer</h1>
            <h1 className='second title'>Front-End Developer</h1>
        </Description>
        <Description >
          <img src={programmer} alt="Img Programador"/>
        </Description>
        
        <Link to="tecnologhies" spy={true} smooth={true} offset={50} duration={600}>
          <Arrow>
            <div className="mouse">
              <div className="mouse-in"></div>
            </div>
            <div>
                <span className="down-arrow-1"></span>
                <span className="down-arrow-2"></span>
            </div>
          </Arrow>
          </Link>         
    </ContainerMain>
    
  )
}

export default Main