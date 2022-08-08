import {useNav} from "../hooks/useNav";
import { Typography, Grid, Container, Card, CardMedia, CardHeader, CardActions, IconButton, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';

const useStyles = makeStyles({
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
        <section ref={homeRef} id="homeSection">
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
                                Undergraduate Student
                            </Typography>
                            <Typography variant="h6" component="div" gutterBottom>
                                Southern Methodist University
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                                            <li>Robotics</li>
                                            <li>Artificial Intelligence</li>
                                            <li>Human-Robot Interaction</li>
                                            <li>Legged Locomotion</li>
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography variant="h5" style={{fontWeight: 600}} gutterBottom>
                                        Education
                                    </Typography>
                                    <List>
                                        <Card elevation={0} className={classes.education}>
                                            <SchoolRoundedIcon style={{ fontSize: 30 }}/>
                                            <CardHeader
                                                titleTypographyProps={{variant:'h6'}}
                                                title="B.S. in Computer Science, 2024 (Expected)"
                                                subheader="Southern Methodist University"
                                            />
                                        </Card>
                                        <Card elevation={0} className={classes.education}>
                                            <SchoolRoundedIcon style={{ fontSize: 30 }}/>
                                            <CardHeader
                                                titleTypographyProps={{variant:'h6'}}
                                                title="B.S. in Mathematics, 2024 (Expected)"
                                                subheader="Southern Methodist University"
                                            />
                                        </Card>
                                        <Card elevation={0} className={classes.education}>
                                            <SchoolRoundedIcon style={{ fontSize: 30 }}/>
                                            <CardHeader
                                                titleTypographyProps={{variant:'h6'}}
                                                title="Minor in Data Science, 2024 (Expected)"
                                                subheader="Southern Methodist University"
                                            />
                                        </Card>
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