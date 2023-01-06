import React from 'react'
import styled from 'styled-components';
import wtp from '../images/whatsapp.svg'
import { MdEmail} from 'react-icons/md';
import { GrLinkedin} from 'react-icons/gr';
import { BsGithub} from 'react-icons/bs';
import Formulario from './Formulario';
import BackgroundBottom from './BackgroundBottom';

const Contact = () => {

  const Wtp = styled.div`
    position: fixed;
    bottom: 0;
    padding: 1rem;  
`;
const Imagen = styled.div`
img {
  width: 3rem;
}
`
const ContainerTitle = styled.div`
margin-top: 8rem;
  h1, p {
    display: flex;
    justify-content: center;
    color: #fff;
    padding-top: 1rem;
  }
  p {
    font-size: 30px;
  }
`
const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const ContactSection = styled.div`
width: 100%;
min-height: 40rem;
display: grid;
@media (min-width: 768px) { 
  grid-template-columns: repeat(2, 1fr);
}

place-items: center;
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
}
`;
const Icons = styled.div`
  max-width: 25rem;
  display: flex; 
  justify-content: center;
  align-items: center;
  gap: 3rem;
  font-size: 2.5rem;
`

const iconLinkedin = {
  color: "#1B2EED"
}
const iconsMail = {
  color: "#A80909"
}
const iconsGithub = {
  color: "#FFF"
}

const Footer = styled.div`
  color: white;
  display: flex;
  align-items: center; 
  justify-content:center;
  padding-bottom: .5rem;
`

  return (
    <div>
      <BackgroundBottom/>
    <Wtp>
      <a 
        target="_blank" rel="noopener noreferrer" 
        href='https://api.whatsapp.com/send?phone=3416568944'>
        <Imagen>
          <img src={wtp} alt="Img Wtp"/>
        </Imagen>
      </a>
    </Wtp>
    
    <ContainerTitle id='contact'>
        <h1>Contact</h1>
        <p>Get in touch 👋</p>
    </ContainerTitle>

    <ContactSection>

        <Icons>

          <a 
              target="_blank" rel="noopener noreferrer" 
              to='https://mail.google.com/mail/u/0/#inbox?compose=new'>
              <MdEmail style={iconsMail}/>
              <p css={`font-size: 1.5rem; color: white; margin: 0;`}>Email</p>
          </a>

          <a 
            target="_blank" rel="noopener noreferrer" 
            to='https://www.linkedin.com/in/lionel-gareca-8a1b67221/'>
              <GrLinkedin style={iconLinkedin} />
              <p css={`font-size: 1.5rem; color: white; margin: 0;`}>Linkedin</p>
          </a>

            <a 
            target="_blank" rel="noopener noreferrer" 
            to='https://github.com/LionelGareca95'>
              <BsGithub style={iconsGithub}/>
              <p css={`font-size: 1.5rem; color: white; margin: 0;`}>Github</p>
            </a>

        </Icons>
      
        <ContainerForm>
          <Formulario />
        </ContainerForm>

    </ContactSection>
    
    <Footer>
        <p>All rigth reserved &copy; Lionel Gareca</p>
    </Footer>
    </div>
  )
}

export default Contact