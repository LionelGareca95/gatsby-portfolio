import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const Btn = styled.button`
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

    input {
      padding-left: .5rem;
      width: 20rem;
      height: 2rem;
      border-radius: .5rem;
      font-size: 1.5rem;

      ::placeholder {
        padding-left: .5rem;
      }

    }
    textarea {
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
   return <p>Thanks for joining!</p>;
}
  
  return (
      <Form onSubmit={handleSubmit} method="post" action='https://formspree.io/f/xwkjeedy' >
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