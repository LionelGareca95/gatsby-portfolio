import React from 'react'
import styled from 'styled-components';
import { MdEmail} from 'react-icons/md';
import { GrLinkedin} from 'react-icons/gr';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';


const Contact = () => {

  const style = {
    "font-size": "50px",
    color: "green",
  }
  const Wtp = styled.div`
    position: fixed;
    bottom: 0;
    padding: 1rem;  
`;

const ContainerContact = styled.div`


  h1, p {
    display: flex;
    justify-content: center;
    fontSize: 20px;
  }
`
  return (
    <>
    <Wtp>
      <BsWhatsapp className='wtp' style={style}/>
    </Wtp>

    <ContainerContact>
        <h1>Contacto</h1>
        <p>Get in touch 👋</p>
      
      <div>
      <MdEmail />
      <GrLinkedin />
      <BsGithub />
      </div>
    </ContainerContact>
    </>
  )
}

export default Contact