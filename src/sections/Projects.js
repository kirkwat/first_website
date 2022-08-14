import { useNav } from "../hooks/useNav";
import { Grid, Container, Typography, Divider } from "@material-ui/core";
import ProjectCard from '../components/ProjectCards';
import Data from '../data.json';
import { makeStyles } from '@material-ui/styles';

//TODO
    //improve responsiveness with images

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
        paddingBottom: '.5%'
    },
    subtitle: {
        paddingBottom: '3%'
    },
    divider: {
        height: '3px',
        width:'80px',
        marginTop: '2%',
        marginBottom: '5%',
    }
  })

const Projects = () => {
    const classes = useStyles();
    const projectsRef = useNav("Projects");

    return (
        <section ref={projectsRef} id="projectsSection"  className={classes.secondary_section}>
            <Typography variant="h3" color="textPrimary" className={classes.title}>
                Projects
            </Typography>
            <Typography variant="h6" color="textSecondary" >
                Take a look at some projects that I have been working on!
            </Typography>
            <Divider variant="middle" className={classes.divider}/>
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