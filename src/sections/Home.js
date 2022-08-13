import {useNav} from "../hooks/useNav";
import Data from '../data.json';
import { Typography, Grid, Container, Card, CardMedia, CardHeader, CardActions, IconButton, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';

//TODO
    //indent second line of interest bullet points
    //organize and clean style objects and styles

const useStyles = makeStyles({
    primary_section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '130px',
        marginBottom: '15%'
    },
    card: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      margin: '0px',
      paddingBottom: '25px'
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
        flexDirection: 'column',
        textAlign: 'left',
    },
    education: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'left',
        margin: '0px',
    },
    media: {
      height: 250,
      width: 250,
      borderRadius: '50%',
      marginBottom: '15px'
    }
})

const Home = () => {
    const homeRef = useNav("Home");
    const classes = useStyles();
    
    return (
        <section ref={homeRef} id="homeSection" className={classes.primary_section}>
            <Container style={{paddingLeft: '40px', paddingRight: '40px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Card elevation={0} className={classes.card}>
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
                            <Typography variant="h4" style={{fontWeight: 600}} component="div" gutterBottom>
                                Biography
                            </Typography>
                            <Typography variant="subtitle1" align="justify" gutterBottom>
                                {Data.biography}
                            </Typography>
                        </Card>
                        <Container style={{paddingLeft: '0px', paddingRight: '0px'}}>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={4} style={{paddingTop: '55px', paddingBottom: '0px', paddingRight: '0px'}}>
                                    <Card elevation={0} className={classes.text}>
                                        <Typography variant="h5" style={{fontWeight: 600}} gutterBottom>
                                            Interests
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {Data.interests.map(interests => (
                                                <li style={{fontSylePosition: 'outside'}}>{interests}</li>
                                            ))}
                                        </Typography>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={8} style={{paddingTop: '55px'}}>
                                    <Card elevation={0} className={classes.text}>
                                        <Typography variant="h5" style={{fontWeight: 600}} gutterBottom>
                                            Education
                                        </Typography>
                                        <List style={{padding: '0px'}}>
                                            {Data.degrees.map(degrees => (
                                                <Card elevation={0} className={classes.education}>
                                                    <SchoolRoundedIcon style={{ fontSize: 30 }}/>
                                                    <CardHeader
                                                        style={{padding:'0px 10px 5px'}}
                                                        titleTypographyProps={{variant:'h6'}}
                                                        title={degrees.degree}
                                                        subheader={degrees.school}
                                                    />
                                                </Card>
                                            ))}
                                        </List>
                                    </Card>
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


/*
<Typography variant="h5" style={{fontWeight: 600}}>
                                        Education
                                    </Typography>
                                    <List style={{padding: '0px'}}>
                                        {Data.degrees.map(degrees => (
                                            <Card elevation={1} className={classes.education}>
                                                <SchoolRoundedIcon style={{ fontSize: 30 }}/>
                                                <CardHeader
                                                    style={{padding: '5px 10px'}}
                                                    titleTypographyProps={{variant:'h6'}}
                                                    title={degrees.degree}
                                                    subheader={degrees.school}
                                                />
                                            </Card>
                                        ))}
                                    </List>
*/