import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

const ButtonBid = ({ product }) => {

  const [bid, setBid] = useState(product.initial_bid);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);
  const handleBidAmount = (e) => setBid(e.target.value);

  const makeBid = () => {
    if(product.initial_bid > bid){
      setError(true);
    }
    else{
      setError(false);
      console.log('making a bid');
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
        BID
      </Button>

      <Dialog open={open} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Make a bid</DialogTitle>
        {error &&(
          <Alert severity="error">There an error occurred: Your bit must be greater than ${product.initial_bid}!</Alert>
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
            Make a Bid
          </Button>
        </DialogActions>
      </Dialog>
    </>   
  )
}

export default ButtonBid;