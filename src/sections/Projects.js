import { useNav } from "../hooks/useNav";
import { Grid, Container, Typography } from "@material-ui/core";
import ProjectCard from '../components/ProjectCards';
import Data from '../data.json';
import { makeStyles } from '@material-ui/styles';

//TODO
    //get images
    //improve card design/look
    //improve project title design/look


const useStyles = makeStyles({
    secondary_section: {
        background: '#F7F7F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBottom: '10%'
    },
    title: {
        paddingTop: '15%',
        paddingBottom: '5%'
    }
  })

const Projects = () => {
    const classes = useStyles();
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} id="projectsSection"  className={classes.secondary_section}>
            <Typography variant="h2" color="textPrimary" className={classes.title}>
                Projects
            </Typography>
            <Container>
                <Grid container spacing={4}>
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