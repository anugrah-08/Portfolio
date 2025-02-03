import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m02o9gh', 'template_aqteqsa', form.current, {
        publicKey: 'laPBUCciFG7dE1Xn7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div id="mycontact">
        <div className='contact'>
            <h1 className="head">Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='from_name' required />
                <input type="email" className="email" placeholder='Your Email' name='from_email' required />
                <textarea className="message" rows={"5"} placeholder='Your Message' name='message' required />
                <button className="send" type='submit'>Submit</button>
            </form>

        
        </div>
    </div>
  )
}

export default Contact;
