import React from 'react'
import { Card, Grid, CardMedia, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    justify:"flex-start"
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  media: {
    height: '50%',
    width: 200,
    objectFit: 'cover',
    margin: '30px'
  }
})

export default function ExperienceeCard({ experience }) {
  const classes = useStyles();

  return (
    <div>
      <Card elevation={1} className={classes.root}>
        <CardContent>
          <Typography variant="h6" color="textPrimary" style={{fontWeight: 600}} >
            {experience.title}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {experience.company} - {experience.location}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {experience.date}
          </Typography>
          <Typography variant="body2" color="textSecondary">
              <ul>
                {experience.description.map(description => (
                  <li>{description}</li>
                ))}
              </ul>
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

/*
        <Box clone order={{ xs: 2, sm: 2, md: 2 }}>
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
                <ul>
                  {experience.description.map(description => (
                    <li>{description}</li>
                  ))}
                </ul>
            </Typography>
          </CardContent>
        </Box>
        <Box clone order={{ xs: 1, sm: 1, md: 1 }}>
          <CardMedia
            className={classes.media}
            component="img"
            image={experience.image}
            alt={experience.company}
          />
        </Box>
*/