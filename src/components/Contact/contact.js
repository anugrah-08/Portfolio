import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const alertBox = () => {
    alert("Mail is under maintenance, please contact me through LinkedIn or Github");
  };

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
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id="mycontact">
      <div className="contact">
        <h1 className="head">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
          <textarea className="message" rows="5" placeholder="Your Message" name="message" disabled />
          <button className="send" type="submit" onClick={alertBox}>
            Submit
          </button>
          <div className="social">
            <a className='icons'
              href="https://www.linkedin.com/in/anugrah-e-m-8002b827b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className='icons'
              href="https://github.com/anugrah-08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
