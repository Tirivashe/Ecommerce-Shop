import React, {  useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Paper, Typography }from '@material-ui/core';
import { ProductsDataContext } from '../context'
import NavButton from '../components/NavButton'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  infoDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '1rem'
  }
}));

export default function ProductModal() {
  const value = useContext(ProductsDataContext)
  const { closeModal } = value
  const { modalOpen } = value.state
  const { img, title, price } = value.state.details
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Paper className={classes.paper}>
            <h1>Item Added To Cart</h1>
            <img src={img} alt=''/>
            <div className={classes.infoDiv}>
              <Typography>{title}</Typography>
              <Typography>Price: ${price}</Typography>
            </div>
            <NavButton onClick={closeModal} title="Continue Shopping" route=""/>
            <NavButton onClick={closeModal} title="Proceed To Checkout" route="cart"/>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
