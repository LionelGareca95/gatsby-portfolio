import React from 'react'
import styled from 'styled-components';
import programmer from '../images/programmer.svg'
import { BsBoxArrowUpRight } from 'react-icons/bs';

const ContainerProject = styled.div`
   margin: 100px 0;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   place-items: center;
   gap: 20px;
`;

const CardProject = styled.div`
  border: 1px solid #fff; 
  width: 250px;

  p {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`
const Project = () => {
  return (
    <>
    
    <ContainerProject>
      <CardProject className='card'>
          <img src={programmer} alt="" />
          <p className='info'><BsBoxArrowUpRight/>Projecto </p>    
      </CardProject>
      <CardProject className='card'>
          <img src={programmer} alt="" />
          <p className='info'><BsBoxArrowUpRight/>Projecto </p>    
      </CardProject>
      <CardProject className='card'>
          <img src={programmer} alt="" />
          <p className='info'><BsBoxArrowUpRight/>Projecto </p>    
      </CardProject>
      <CardProject className='card'>
          <img src={programmer} alt="" />
          <p className='info'><BsBoxArrowUpRight/>Projecto </p>    
      </CardProject>

      
       
    </ContainerProject>

    </>
  )
}

export default Project