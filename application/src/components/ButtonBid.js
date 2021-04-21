import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const ButtonBid = () => {

  const [bid, setBid] = useState(0);
  return(
    <Button
      variant="contained"
      color="primary"
      className="buttonBid"
    >
      BID
    </Button>
  )
}

export default ButtonBid;