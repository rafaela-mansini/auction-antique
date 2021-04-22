import React from 'react';
import { Grid } from '@material-ui/core';

import ButtonBid from 'components/ButtonBid';
import ButtonAutomaticBid from 'components/ButtonAutomaticBid';

const Detail = ({ product }) => {
  return(
    <Grid container spacing={3} className="detail">
       <Grid item className="priceBid">
        <p>Current bid: ${product.initial_bid}</p>
      </Grid>
      <p className="description">{product.description}</p>
      <span className="expireDate">Exipre at: {product.expired_time}</span>
      <Grid item spacing={3} className="buttonsBid" container justify="space-between" alignItems="flex-end">
        <ButtonBid product={product} />
        <ButtonAutomaticBid />
      </Grid>
     
    </Grid>
  )
}

export default Detail;