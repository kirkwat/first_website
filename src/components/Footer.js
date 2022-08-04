import React from "react";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Box, Container, makeStyles } from "@material-ui/core";

//TO ADD
  //center icons
  //formatting
  

  const useStyles = makeStyles({
    footer: {
      width: '100%',
      padding: '1rem',
      backgroundColor: '#222',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    btn: {
      fontSize: '50px',
      color: 'white',
      '&:hover':{
        //CHANGE COLOR
        color: 'green',
      }
    },
  });

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box>
        <Container maxWidth="lg" >
          <Box m="auto">
            <IconButton
              className={classes.btn}
              onClick={event =>  window.location.href='https://github.com/kirkwat'}
            >
              <GitHubIcon fontSize="inherit"/>
            </IconButton>
            <IconButton
              className={classes.btn}
              onClick={event =>  window.location.href='https://www.linkedin.com/in/kirk-watson/'}
            >
              <LinkedInIcon fontSize="inherit"/>
            </IconButton>
          </Box>
          <Box>
            Developed and Maintained by Kirk Watson
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;