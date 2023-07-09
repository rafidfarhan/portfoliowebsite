import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x8ehfvv', 'template_gbih3da', form.current, 'yx_BjUweoZJnnsPG7')
          .then((result) => {
              console.log(result.text);
              alert('Message sent successfully!');
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <section className = 'contact-div' id ='contact'>
    <div className = 'form-div'>
            
        <h1>Send me a message!</h1>
        <h2>Got a question or proposal, or just want to say hello? Go ahead.</h2>
        
        <form ref={form} className='contact-form' onSubmit={sendEmail}>
            <section className ='form-name-email-section'>
            <input className = 'input-1' type="text" name="from_name"  placeholder=" Enter your name" required/>
              <input className = 'input-1' type="email" name="from_email" placeholder ='Enter your email' required />
            </section>
           
              <section>
              <textarea className = 'message' name="message " placeholder=" Message" required/>
              </section>
              
              <input type="submit" className= 'submit-button' value="Send" />
          </form>
        </div>
        </section>
         
  )
}

export default Contact