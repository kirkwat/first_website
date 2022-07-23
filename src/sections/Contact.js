import {useNav} from "../hooks/useNav"
import ContactForm from "../components/ContactForm";

const Contact = () => {
    const contactRef = useNav("Contact");

    return (
        <section ref={contactRef} id="contactSection">
            <h2>Contact</h2>
            <p>
                email me @ watson.kirk00@gmail.com
            </p>
            <div>
                <ContactForm/>
            </div>
        </section>
    );
}

export default Contact