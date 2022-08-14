import {useNav} from "../hooks/useNav";
import { Grid, Container, Typography, Divider } from "@material-ui/core";
import ExperienceCard from '../components/ExperienceCards';
import Data from '../data.json';
import { makeStyles } from '@material-ui/styles';

//TODO
    //have images move above text when screen is really small

const useStyles = makeStyles({
    primary_section: {
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
        textAlign: 'center'
    },
    divider: {
        height: '3px',
        width:'80px',
        marginTop: '2%',
        marginBottom: '5%',
    }
})

const Experience = () => {
    const classes = useStyles();
    const experienceRef = useNav("Experience");

    return (
        <section ref={experienceRef} id="experienceSection" className={classes.primary_section}>
            <Typography variant="h3" color="textPrimary" className={classes.title}>
                Experience
            </Typography>
            <Typography variant="h6" color="textSecondary" className={classes.subtitle}>
                Check out the internships that I am fortunate to have participated in.
            </Typography>
            <Divider variant="middle" className={classes.divider}/>
            <Container>
                <Grid container spacing={3}>
                    {Data.jobs.map(experience => (
                        <Grid item xs={12} key={experience.id}>
                            <ExperienceCard experience={experience} />
                        </Grid>
                    ))}
                </Grid>
           </Container>
        </section>
    );
}

export default Experience