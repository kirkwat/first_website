import { useNav } from "../hooks/useNav";
import { Grid, Container, Typography } from "@material-ui/core";
import ProjectCard from '../components/ProjectCards';
import Data from '../data.json';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    secondary_section: {
        background: '#F7F7F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '5%',
        paddingBottom: '10%'
    }
  })

const Projects = () => {
    const classes = useStyles();
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} id="projectsSection"  className={classes.secondary_section}>
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