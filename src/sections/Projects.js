import { useNav } from "../hooks/useNav"

const Projects = () => {
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} id="projectsSection">
            <h2>Projects</h2>
            <p>
                bunch of text
            </p>
        </section>
    );
}

export default Projects