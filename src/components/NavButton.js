import React from 'react';
import { Link } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  cartButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    background: '#3f51b5',
    border: '0.05rem solid #fff',
    color: '#fff',
    borderRadius: '0.5rem',
    padding: '0.2rem 0.5rem',
    cursor: 'pointer',
    margin: '0.2rem 0.5rem 0.2rem 0',
    transition: 'all 0.5sec ease-in-out',
    textAlign: 'center',
    '&:hover': {
      background: '#fff',
      border: '1px solid #fff',
      color: 'black'
    }
  },
  cartButtonLink: {
    width: '8%',
    height: '10%',
    textDecoration: 'none',
    color: 'white'
  }
}))

const NavButton = ({ title, route, icon, onClick }) => {
  const classes = useStyles()
  return (
    <Link to={`/${route}`} className={classes.cartButtonLink}>
      <Button onClick={onClick} className={classes.cartButton}>{icon}{title}</Button>
    </Link>
  );
}

export default NavButton;
