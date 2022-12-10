import React from 'react'
import styled from 'styled-components';
import programmer from '../images/programmer.svg'

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
      <CardProject>
          <img src={programmer} alt="" />
          <p>Projecto</p>
      </CardProject>
      <CardProject>
          <img src={programmer} alt="" />
          <p>Projecto</p>
      </CardProject>
      <CardProject>
          <img src={programmer} alt="" />
          <p>Projecto</p>
      </CardProject>
      <CardProject>
          <img src={programmer} alt="" />
          <p>Projecto</p>
      </CardProject>

      
       
    </ContainerProject>

    </>
  )
}

export default Project