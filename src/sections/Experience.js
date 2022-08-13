import {useNav} from "../hooks/useNav";
import { Grid, Container, Typography } from "@material-ui/core";
import ExperienceCard from '../components/ExperienceCards';
import Data from '../data.json';
import { makeStyles } from '@material-ui/styles';

//TODO
    //formatting
        //have images move above text when screen is really small

const useStyles = makeStyles({
    primary_section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '15%',
        paddingBottom: '20%'
    }
  })

const Experience = () => {
    const classes = useStyles();
    const experienceRef = useNav("Experience");

    return (
        <section ref={experienceRef} id="experienceSection" className={classes.primary_section}>
            <Typography variant="h2" color="textPrimary">
                Experience
            </Typography>
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