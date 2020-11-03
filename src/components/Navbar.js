import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { PhoneAndroid, ShoppingCartOutlined } from '@material-ui/icons'
import NavButton from './NavButton'

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 0.95,
  },
  cartButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    background: 'transparent',
    border: '0.05rem solid #fff',
    borderRadius: '0.5rem',
    padding: '0.2rem 0.5rem',
    cursor: 'pointer',
    margin: '0.2rem 0.5rem 0.2rem 0',
    transition: 'all 0.5sec ease-in-out',
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
  },

  link: {
    textDecoration: 'none',
    color: 'white'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <Link to='/' className={classes.link}>
              <PhoneAndroid />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.link}>
              PRODUCTS
            </Link>
          </Typography>
          <NavButton route="cart" title="My Cart" icon={<ShoppingCartOutlined />} />
        </Toolbar>
      </AppBar>
    </div>
  );
}