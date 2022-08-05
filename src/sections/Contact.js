import {useNav} from "../hooks/useNav"
import ContactForm from "../components/ContactForm";
import { Typography } from '@material-ui/core'

const Contact = () => {
    const contactRef = useNav("Contact");

    return (
        <section ref={contactRef} id="contactSection">
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