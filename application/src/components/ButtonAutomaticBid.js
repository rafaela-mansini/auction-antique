import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

import api from 'services/api';

const ButtonAutomaticBid = ({ product }) => {

  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [user] = useState(localStorage.getItem('@auction/user'));

  useEffect(() => {
    const getActualBalance = async () => {
      const response = await api.post(`users/balance`, { id: user });
      if(response.data.data){
        setBalance(response.data.data.balance);
      }
    }
    getActualBalance();
  }, []);

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);
  const handleBalance = (e) => setBalance(e.target.value);

  const automate = async () => {
    const response = await api.post('automate-bid', { balance, user_id: user, product_id: product.id });

    if(response.data.data.success){
      setMessage('Automate created with success');
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    else{
      setMessage(`There an error occurred: ${response.data.data.error}`);
      setError(true);
    }
  }

  return(
    <>
      <Button
        variant="contained"
        color="secondary"
        className="buttonBid"
        onClick={handleOpenDialog}
      >
        AUTOMATE BID
      </Button>

      <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Automatize your bid</DialogTitle>
        {error &&(<Alert severity="error">{message}</Alert>)}
        {success &&(<Alert severity="success">{message}</Alert>)}
        <DialogContent>
          <DialogContentText>
            For every bid that someone makes on this product, make a bid of $ 1 and don't lose your product.<br />Enter the maximum amount below that you’d like to spend on all of your bids.
          </DialogContentText>
          <CurrencyTextField
            autoFocus
            label="Total balance to spend"
            currencySymbol="$"
            decimalCharacter="."
            digitGroupSeparator=""
            outputFormat="string"
            value={balance}
            onChange={(e)=> handleBalance(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button  color="primary" onClick={() => automate()}>
            Automate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ButtonAutomaticBid;