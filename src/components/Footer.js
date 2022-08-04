import React from "react";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "../styles/Footer.module.css";

//TO ADD
  //enlarge buttons when hovering

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <IconButton
          onClick={event =>  window.location.href='https://github.com/kirkwat'}
        >
          <GitHubIcon/>
        </IconButton>
        <IconButton
          onClick={event =>  window.location.href='https://www.linkedin.com/in/kirk-watson/'}
        >
          <LinkedInIcon/>
        </IconButton>
      </div>
      <p >
        Developed and Maintained by Kirk Watson
      </p>
    </div>
  );
}

export default Footer;