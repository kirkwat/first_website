import React from 'react'
import { Card,CardMedia, Box,CardContent,CardActions,Typography, Button} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  media: {
    height: 200,
    width: 200
  },
  button: {
    color: '#2963FF',
    backgroundColor: '#FFFFFF',
    borderColor: '#2963FF',
    '&:hover':{
      backgroundColor: '#2963FF',
      color: '#FFFFFF'
    }
  },
})

export default function ProjectCard({ project }) {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={1} className={classes.root}>
        <CardMedia
          className={classes.media}
          component="img"
          image={project.image}
          alt={project.title}
        />
        <CardContent>
          <Typography variant="body2" color="textPrimary">
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined"
            size="small"
            justify="center"
            className={classes.button}
            endIcon={<GitHubIcon/>}
            onClick={event =>  window.location.href=project.github}
          >
            See Code
          </Button>
          <Button variant="outlined"
            size="small"
            justify="center"
            className={classes.button}
            endIcon={<YouTubeIcon/>}
            onClick={event =>  window.location.href=project.youtube}
          >
              View Demo
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}