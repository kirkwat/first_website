import React from 'react'
import { Card,CardMedia,CardContent,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  media: {
    height: 200,
    width: 200
  }
})

export default function ExperienceeCard({ experience }) {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={1} className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textPrimary">
            {experience.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {experience.company}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {experience.date}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {experience.location}
          </Typography>
          <Typography variant="body2" color="textSecondary">
              {experience.description.map(description => (
                <li>{description}</li>
              ))}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          component="img"
          image={experience.image}
          alt={experience.company}
        />
      </Card>
    </div>
  )
}