import {useNav} from "../hooks/useNav"

const Contact = () => {
    const contactRef = useNav("Contact");

    return (
        <section ref={contactRef} id="contactSection">
            <h2>Contact</h2>
            <p>
                bunch of text
            </p>
        </section>
    );
}

export default Contact