import React from "react";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, Typography, List} from "@material-ui/core";

//TO ADD
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
      flexDirection: 'column'
    },
    btn: {
      fontSize: '50px',
      color: 'white',
      transform: 'scale(1)',
      '&:hover':{
        transform: 'scale(1.25)'
      }
    },
  });

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <List spacing={2}>
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
      </List>
      <Typography align="center">
            Developed and Maintained by Kirk Watson
      </Typography>
    </footer>
  );
}

export default Footer;