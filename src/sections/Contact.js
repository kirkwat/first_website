import {useNav} from "../hooks/useNav";
import ContactForm from "../components/ContactForm";
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

//TODO
  //have text clear after sending message and button change to sent
  //have popup show after sending

const useStyles = makeStyles({
    secondary_section: {
        background: '#F7F7F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        paddingBottom: '15%'
    },
    title: {
        paddingTop: '15%',
        paddingBottom: '.5%'
    },
    divider: {
        height: '3px',
        width:'80px',
        marginTop: '2%',
        marginBottom: '5%',
    }
  })

const Contact = () => {
    const classes = useStyles();
    const contactRef = useNav("Contact");

    return (
        <section ref={contactRef} id="contactSection"  className={classes.secondary_section}>
            <Typography variant="h3" color="textPrimary" className={classes.title}>
                Contact
            </Typography>
            <Typography variant="h6" color="textSecondary">
                Fill out this form to reach me or email me - klwatson@smu.edu
            </Typography>
            <Divider variant="middle" className={classes.divider}/>
            <ContactForm/>
        </section>
    );
}

export default Contact