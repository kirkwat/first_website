import { useNav } from "../hooks/useNav";
import { Grid, Container, Typography } from "@material-ui/core";
import ProjectCard from '../components/ProjectCards';
import Data from '../data.json';

const Projects = () => {
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} id="projectsSection">
            <Typography variant="h2" color="textPrimary">
                Projects
            </Typography>
            <Container>
                <Grid container spacing={3}>
                    {Data.projects.map(project => (
                        <Grid item sm={6} md={4} key={project.id}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
           </Container>
        </section>
    );
}

export default Projects