import {useNav} from "../hooks/useNav"
import ContactForm from "../components/ContactForm";

const Contact = () => {
    const contactRef = useNav("Contact");

    return (
        <section ref={contactRef} id="contactSection">
            <div>
                <ContactForm/>
            </div>
        </section>
    );
}

export default Contact