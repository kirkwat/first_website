import {useNav} from "../hooks/useNav"
import { Grid, Container, Typography } from "@material-ui/core";
import ExperienceCard from '../components/ExperienceCards'
import Data from '../data.json'

//TODO
    //

const Experience = () => {
    const experienceRef = useNav("Experience");

    return (
        <section ref={experienceRef} id="experienceSection" className="secondary-section">
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