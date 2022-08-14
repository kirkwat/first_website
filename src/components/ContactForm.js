import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({

  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
    maxWidth: '650px'
  },
  button: {
    color: '#2963FF',
    backgroundColor: '#F7F7F7',
    borderColor: '#2963FF',
    marginBottom: '16px',
    '&:hover':{
      backgroundColor: '#2963FF',
      color: '#F7F7F7'
    }
  }
});

export const ContactForm = () => {
  const form = useRef();
  const classes = useStyles();
  const [user_name, setName] = useState('');
  const [user_email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (user_name == '') {
      setNameError(true);
    }
    if (user_email == '') {
      setEmailError(true);
    }
    if (message == '') {
      setMessageError(true);
    }
    if (user_name && message && user_email) {
      emailjs.sendForm('service_32lrs4g', 'template_omoqb4o', form.current, '9xpR80keDKN9Qvixo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  return (
    <Container size="sm" className={classes.field}>
      <form noValidate ref={form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setName(e.target.value)}
          label="Name" 
          variant="outlined" 
          name="user_name"
          fullWidth
          required
          error={nameError}
        />
        <TextField className={classes.field}
          onChange={(e) => setEmail(e.target.value)}
          label="Email" 
          variant="outlined" 
          name="user_email"
          fullWidth
          required
          error={emailError}
        />
        <TextField className={classes.field}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={8}
          fullWidth
          required
          error={messageError}
        />
        <Button
          type="submit"
          variant="outlined"
          size="small"
          justify="center"
          className={classes.button}
          endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  )
};

export default ContactForm;  