import React from 'react';
import styled from 'styled-components';
import afilados from '../images/afilados.png';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from "gatsby";
import BackgroundBottom from './BackgroundBottom';

const ContainerProject = styled.div`
    padding: 2rem 0;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    place-items: center;
    @media (min-width: 950px) { 
      grid-template-columns: repeat(2,minmax(0, 1fr))
    }
     h1 {
      padding: 2rem;
     }

`;

const CardProject = styled.div`
  border: 1px solid #fff; 
  width: 380px;


  p {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`
  const Button = styled.button`
  background: linear-gradient(to right, #ff512f, #f09819);
  border-radius: 5px;
  border: none;
  width: 9rem;
  padding: .5rem;
  &:hover {
    cursor: pointer;
  }
  .BsBoxArrowUpRight {
    color: black;
  }
  `;

  const ContainerCard = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.8rem;
  `;

  const Title = styled.h1`
    color: #fff;
    font-size: 30;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
  `

  const Container = styled.div`
    background-color: #48403b;
  `
const Project = () => {
  return (
    <Container>
        <Title>Projects</Title>
    <ContainerProject>
          
      <ContainerCard>
        <h1 className='title'>Afilados Rosario</h1>
      <CardProject className='card'>
            <img src={afilados} alt="Imagen Afilados" loading='lazy' />
          <Link to='https://www.afiladosrosario.com.ar/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </Link>
      </CardProject>
      </ContainerCard>

      <ContainerCard>
        <h1 className='title'>Afilados Rosario</h1>
      <CardProject className='card'>
            <img src={afilados} alt="Imagen Afilados" loading='lazy' />
          <Link to='https://www.afiladosrosario.com.ar/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </Link>
      </CardProject>
      </ContainerCard>

      <ContainerCard>
        <h1 className='title'>Afilados Rosario</h1>
      <CardProject className='card'>
            <img src={afilados} alt="Imagen Afilados" loading='lazy' />
          <Link to='https://www.afiladosrosario.com.ar/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </Link>
      </CardProject>
      </ContainerCard>

      <ContainerCard>
        <h1 className='title'>Afilados Rosario</h1>
      <CardProject className='card'>
            <img src={afilados} alt="Imagen Afilados" loading='lazy' />
          <Link to='https://www.afiladosrosario.com.ar/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </Link>
      </CardProject>
      </ContainerCard>

      
       
    </ContainerProject>
      <BackgroundBottom />
    </Container>
  )
}

export default Project