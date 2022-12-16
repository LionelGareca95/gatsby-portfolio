import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Swal from 'sweetalert2'

const Btn = styled.button`
  color: #fff;
  height: 3rem;
  width: 8rem;
  background-color: #D14627;
  font-size: 1.5rem;
  border-radius: .5rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(209, 102, 49, .8);
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
      background-color: rgba(110, 104, 100, .5);

      &:focus {
        border: 1px solid #f5f5f5;
        color: #f5f5f5
      }
      ::placeholder {
        padding-left: .5rem;
  
      }

    }
    textarea {
      
      background-color: rgba(110, 104, 100, .5);
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


function ContactForm() {

  const [state, handleSubmit] = useForm("xwkjeedy");  

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
      <Form onSubmit={handleSubmit} method="post" action='https://formspree.io/f/xwkjeedy' autoComplete='off'>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder='Name'
      />
       <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        type="text" 
        name="message" 
        placeholder='message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Btn type="submit" disabled={state.submitting}>
        Submit
      </Btn>
    </Form>
  );
}
function Formulario() {
  return (
    <ContactForm />
  );
}
export default Formulario;