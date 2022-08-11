import {useNav} from "../hooks/useNav";
import ContactForm from "../components/ContactForm";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    secondary_section: {
        background: '#b5b5b5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: 'auto',
    }
  })

const Contact = () => {
    const classes = useStyles();
    const contactRef = useNav("Contact");

    return (
        <section ref={contactRef} id="contactSection"  className={classes.secondary_section}>
            <Typography
                variant="h2"
                color="textPrimary"
            >
                Contact
            </Typography>
            <Typography
                variant="h6" 
                color="textSecondary"
            >
                email me @ klwatson@smu.edu
            </Typography>
            <ContactForm/>
        </section>
    );
}

export default Contact