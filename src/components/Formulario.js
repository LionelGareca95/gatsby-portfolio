import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'

const Btn = styled.button`
  color: #fff;
  height: 2.5rem;
  width: 7.5rem;
  background-color: #D14627;
  font-size: 1.5rem;
  border-radius: .5rem;

  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    color: #fff;
    input {
      padding-left: .5rem;
      width: 20rem;
      height: 2rem;
      border-radius: .5rem;
      font-size: 1.5rem;
      background-color: var(--gris);

      &:focus {
        border: 1px solid #f5f5f5;
        color: #f5f5f5
      }
      ::placeholder {
        padding-left: .5rem;
  
      }

    }
    textarea {
      
      background-color: var(--gris);
      padding-left: .5rem;
      border-radius: .5rem;
      font-size: 1.5rem;
      resize: none;
      width: 20rem;
      height: 10rem;
      ::placeholder {
        padding-left: .5rem;
        
      }
    }
   
`;
const Error = styled.div`
color: red;
font-size: 1rem;
font-weight: 700;
padding: 5px;
`

function ContactForm() {

  const [state, handleSubmit] = useForm("xwkjeedy");  
  const [errorName, setErrorName] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')

// Validar Nombre
function validarNombre(nombre) {
  return /^[A-Za-z\ ]{3,20}$/.test(nombre)
}

const handleChangeNombre = e => {
  if (!validarNombre(e.target.value)) {
    setErrorName('Nombre Invalido')
  } else {
    setErrorName(null)
  }
  setNombre(e.target.value)
}

useEffect(() => {
  validarNombre()
}, [nombre])

// Validar Email
function validarCorreo(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

const handleChangeEmail = e => {
  if (!validarCorreo(e.target.value)) {
    setErrorEmail('email invalido')
  } else {
    setErrorEmail(null)
  }

  setCorreo(e.target.value)
}

useEffect(() => {
  validarCorreo()
}, [correo])


  if (state.succeeded) {
   return Swal.fire({
    title: 'Message sent succesfully!',
    text: 'Return to home',
    icon: 'success',
    confirmButtonText: 'Ok',
    confirmButtonColor: '#D14627'
  })
}


  return (
      <Form onSubmit={handleSubmit} method="POST" action='https://formspree.io/f/xwkjeedy' autoComplete='off'>
      <fieldset>Send me a message</fieldset>
      <div className="field">
        <input 
          type="text" 
          name='name'
          id='name' 
          required 
          autoComplete="off" 
          onChange={handleChangeNombre}

        />
        <label htmlFor='name' title='Name' data-title='Name'/>
        {errorName && <Error>{errorName}</Error>}
      </div>
        <ValidationError prefix="Name" field="name" errors={state.errors}/>
        
      <div className="field">
        <input 
          type="email" 
          name='email'
          id='email' 
          required 
          autoComplete="off" 
          onChange={handleChangeEmail}
        />
        <label htmlFor='email' title='Email' data-title='Email'/>
        {errorEmail && <Error>{errorEmail}</Error>}
      </div>

      <div className="field">
        <textarea 
          type="text" 
          name='message' 
          required 
          id='message'
          autoComplete="off"
        />
        <label className='message' htmlFor='Message' title='Message' data-title='Message'/>
      </div>

      <Btn type="submit">Submit</Btn>
      
    </Form>
  );
}
function Formulario() {
  return (
    <ContactForm />
  );
}
export default Formulario;