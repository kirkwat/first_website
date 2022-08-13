import {useNav} from "../hooks/useNav";
import ContactForm from "../components/ContactForm";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    secondary_section: {
        background: '#F7F7F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '15%',
        paddingBottom: '15%'
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