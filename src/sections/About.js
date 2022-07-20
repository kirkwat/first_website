import { useNav } from "../hooks/useNav"

const About = () => {
    const aboutRef = useNav("About");

    return (
        <section ref={aboutRef} id="aboutSection" className="secondary-section">
            <h2>About</h2>
            <p>
                bunch of text
            </p>
        </section>
    );
}

export default About