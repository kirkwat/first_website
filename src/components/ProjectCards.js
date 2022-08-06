import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography, Button} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/styles';

//TODO
    //formatting

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
  }
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
            <Button size="small">
                <GitHubIcon fontSize="medium"/>
                See Code
            </Button>
            <Button size="small">
                <YouTubeIcon fontSize="medium"/>
                View Demo
            </Button>
        </CardActions>
      </Card>
    </div>
  )
}