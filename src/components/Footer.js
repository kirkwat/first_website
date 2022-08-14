import React from "react";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, Typography, List} from "@material-ui/core";

//TO ADD
  //back to top scroll button
  
  const useStyles = makeStyles({
    footer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '10px',
      paddingBottom: '25px'
    },
    btn: {
      fontSize: '2.5rem',
      color: '#2963FF',
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
      <Typography color="textSecondary" align="center">
            Developed and Maintained by Kirk Watson
      </Typography>
    </footer>
  );
}

export default Footer;