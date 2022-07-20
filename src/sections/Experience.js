import {useNav} from "../hooks/useNav"

const Experience = () => {
    const experienceRef = useNav("Experience");

    return (
        <section ref={experienceRef} id="experienceSection" className="secondary-section">
            <h2>Experience</h2>
            <p>
                bunch of text
            </p>
        </section>
    );
}

export default Experience