import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

import api from 'services/api';

const ButtonBid = ({ product, initialBid }) => {

  const [bid, setBid] = useState(initialBid);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);
  const handleBidAmount = (e) => setBid(parseFloat(e.target.value));

  const makeBid = async () => {
    if(initialBid >= bid){
      setErrorMessage(`There an error occurred: Your bid must be greater than ${product.initial_bid}!`);
      setError(true);
    }
    else{
      const user = localStorage.getItem('@auction/user');
      const response = await api.post('make-bid', {bid, product_id: product.id, user_id: user});
      if(response.data.data.error){
        setErrorMessage(`There an error occurred: ${response.data.data.error}!`);
        setError(true);
      }else{
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  }

  return(
    <>
      <Button
        variant="contained"
        color="primary"
        className="buttonBid"
        onClick={handleOpenDialog}
      >
        BID NOW
      </Button>

      <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Make a bid</DialogTitle>
        {error &&(
          <Alert severity="error">{errorMessage}</Alert>
        )}
        {success &&(
          <Alert severity="success">The bid was made.</Alert>
        )}
        <DialogContent>
          <DialogContentText>
            To place your bid, enter the amount in the field below. Make sure the amount is not less than the current minimum bid.
          </DialogContentText>
          <CurrencyTextField
            autoFocus
            label="Amount bid"
            value={bid}
            currencySymbol="$"
            decimalCharacter="."
            digitGroupSeparator=""
            outputFormat="string"
            onChange={(e)=> handleBidAmount(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={makeBid} color="primary">
            Submit bid
          </Button>
        </DialogActions>
      </Dialog>
    </>   
  )
}

export default ButtonBid;