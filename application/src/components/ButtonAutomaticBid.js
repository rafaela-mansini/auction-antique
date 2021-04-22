import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const ButtonAutomaticBid = () => {

  const [bid, setBid] = useState(0);
  return(
    <Button
      variant="contained"
      color="secondary"
      className="buttonBid"
    >
      AUTOMATE BID
    </Button>
  )
}

export default ButtonAutomaticBid;