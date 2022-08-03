import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <GitHubIcon onClick={event =>  window.location.href='https://github.com/kirkwat'}/>
        <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/kirk-watson/'}/>
      </div>
      <p >
        Developed and Maintained by Kirk Watson
      </p>
    </div>
  );
}

export default Footer;