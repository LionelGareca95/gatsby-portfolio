import React from 'react';
import styled from 'styled-components';
import afilados from '../images/afilados.webp';
import SayQuality from '../images/sayquality.webp' 
import constructora from '../images/constructora.webp' 
import pelisReact from '../images/pelisreact.webp' 
import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs';
import { Link } from "gatsby";
import {FcBriefcase, AiFillGithub} from 'react-icons/fc'



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
      padding-bottom: 2rem;
     }

`;

const CardProject = styled.div`
    width: 100%;
     margin: 5px;

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

  const Titulo = styled.h1`
    color: #fff;
    font-size: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  `

  const Container = styled.div`
    background-color: #302F2E;
  `

const Parrafo = styled.div`
max-width: 600px;
  padding: 1rem;
  margin: 0 auto;
  text-align: justify;

  p {
    line-height: 25px;
    font-size: 1.2rem;
  }
`
const Github = styled.a`
  color: white;
  padding: .5rem;
  border-radius: .5rem;

  &:hover {
    color: orange;
  }
 
`

const Project = () => {
  return (
    <Container>
        <Titulo>Projects&nbsp;<FcBriefcase/></Titulo>
    <ContainerProject>
          
      <ContainerCard>
        <h1>Afilados Rosario <Github target="_blank" rel="noopener noreferrer" href='https://github.com/LionelGareca95/AfiladosRosario'><BsGithub/></Github></h1> 
      <CardProject className='card'>
            <img src={afilados} alt='Afilados Rosario'/>
          <a target="_blank" rel="noopener noreferrer" href='https://www.afiladosrosario.com.ar/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </a>
      </CardProject>
      <Parrafo>
        <p>Se han utilizado las tecnologias de HTML-CSS-Javascript-Sass
          Se ha utilizado una libreria llamada Swiper Js que incluye
          una galeria de imagenes con los distintos productos. Contiene enlaces a redes sociales y un mapa con la localizacion.
          Es una empresa familiar que ofrece servicios de afilados. al estar vinculado a Google Mi negocio, aumento exponencialmente su clientela.
        </p>
      </Parrafo>
      </ContainerCard>

      <ContainerCard>
        <h1>Say Quality <Github target="_blank" rel="noopener noreferrer" href='https://github.com/LionelGareca95/AfiladosRosario'><BsGithub/></Github></h1>
      <CardProject className='card'>
          <img src={SayQuality} alt='Say Quality' />
          <a target="_blank" rel="noopener noreferrer" href='https://www.afiladosrosario.com.ar/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </a>
      </CardProject>
      <Parrafo>
        <p>El proyecto fue grupal y fuimos integrando los cambios en github. Contó con un front-end (yo) - Full-Stack - Back-end - Project Manager y Tester Qa. Se han utilizado las tecnologias de Sass, React (vite) y peticiones fetch nativas y validaciones con Vainilla JavaScript para el Front-End. En tanto el Back se utilizo SQL y Jason Web Token para guardar la info del login en el Local Storage.  
        </p>
      </Parrafo>
      </ContainerCard>

      <ContainerCard>
        <h1> A85 Constructora <Github target="_blank" rel="noopener noreferrer" href='https://github.com/LionelGareca95/AfiladosRosario'><BsGithub/></Github></h1>
      <CardProject className='card'>
          <img  src={constructora} alt='Constructora'/>
          <a target="_blank" rel="noopener noreferrer" href='https://constructora85.netlify.app/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </a>
      </CardProject>
      <Parrafo>
        <p>Se han utilizado las tecnologias de HTML-CSS-Javascript-Sass
          Se ha utilizado una libreria llamada Swiper Js que incluye
          una galeria de imagenes con los distintos productos. Contiene enlaces a redes sociales y un mapa con la localizacion.
          Es una empresa familiar que ofrece servicios de afilados. al estar vinculado a Google Mi negocio, aumento exponencialmente su clientela.
        </p>
      </Parrafo>
      </ContainerCard>

      <ContainerCard>
        <h1 className='titulo'>Pelis React <Github target="_blank" rel="noopener noreferrer" href='https://github.com/LionelGareca95/AfiladosRosario'><BsGithub/></Github></h1>
      <CardProject className='card'>
            <img src={pelisReact} alt='asd' />
          <a target="_blank" rel="noopener noreferrer" href='https://pelisreact.netlify.app/'>
            <Button className='info'><BsBoxArrowUpRight/> View </Button>   
          </a>
      </CardProject>
      <Parrafo>
        <p>Se han utilizado las tecnologias de HTML-CSS-Javascript-Sass
          Se ha utilizado una libreria llamada Swiper Js que incluye
          una galeria de imagenes con los distintos productos. Contiene enlaces a redes sociales y un mapa con la localizacion.
          Es una empresa familiar que ofrece servicios de afilados. al estar vinculado a Google Mi negocio, aumento exponencialmente su clientela.
        </p>
      </Parrafo>
      </ContainerCard>

    </ContainerProject>

    </Container>
  )
}

export default Project