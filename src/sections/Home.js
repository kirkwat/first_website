import {useNav} from "../hooks/useNav";
import Data from '../data.json';
import { Typography, Grid, Container, Card, CardMedia, CardHeader, CardActions, IconButton, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';

const useStyles = makeStyles({
    primary_section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
    },
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
        flexDirection: 'column',
        textAlign: 'left'
    },
    education: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'left'
    },
    media: {
      height: 200,
      width: 200,
      borderRadius: '50%'
    }
})

const Home = () => {
    const homeRef = useNav("Home");
    const classes = useStyles();
    
    return (
        <section ref={homeRef} id="homeSection" className={classes.primary_section}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Card elevation={0} className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                component="img"
                                image="/img/headshot.jpg"
                                alt="avatar"
                            />
                            <Typography variant="h4" component="div">
                                Kirk Watson
                            </Typography>
                            <Typography variant="h6" component="div" color="textSecondary">
                                {Data.occupation}
                            </Typography>
                            <Typography variant="h6" component="div" gutterBottom>
                                {Data.school}
                            </Typography>
                            <CardActions>
                                <IconButton size="small" >
                                    <GitHubIcon fontSize="large"/>
                                </IconButton>
                                <IconButton size="small">
                                    <LinkedInIcon fontSize="large"/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card elevation={0} className={classes.text}>
                            <Typography variant="h3" style={{fontWeight: 600}} component="div" gutterBottom>
                                Biography
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                {Data.biography}
                            </Typography>
                        </Card>
                        <Container>
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={4}>
                                    <Card elevation={0} className={classes.text}>
                                        <Typography variant="h5" style={{fontWeight: 600}} gutterBottom>
                                            Interests
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {Data.interests.map(interests => (
                                                <li>{interests}</li>
                                            ))}
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h5" style={{fontWeight: 600}} gutterBottom>
                                        Education
                                    </Typography>
                                    <List>
                                        {Data.degrees.map(degrees => (
                                            <Card elevation={0} className={classes.education}>
                                            <SchoolRoundedIcon style={{ fontSize: 30 }}/>
                                            <CardHeader
                                                titleTypographyProps={{variant:'h6'}}
                                                title={degrees.degree}
                                                subheader={degrees.school}
                                            />
                                            </Card>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
           </Container>
        </section>
    );
}

export default Home