import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '3rem',
    fontFamily: 'Sans Serif',
    marginTop: '3rem',
    marginBottom: '3rem',
  }
}))

const Title = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography align='center' className={classes.title} color='primary' >
      {title}
    </Typography>
  );
}

export default Title;
