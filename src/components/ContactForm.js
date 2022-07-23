import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32lrs4g', 'template_omoqb4o', form.current, '9xpR80keDKN9Qvixo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" placeholder="Name" name="user_name" />
      <input type="email" placeholder="Email" name="user_email" />
      <textarea placeholder="Message"  name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;  