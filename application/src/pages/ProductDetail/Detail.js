import React from 'react';
import { Grid } from '@material-ui/core';

import ButtonBid from 'components/ButtonBid';
import ButtonAutomaticBid from 'components/ButtonAutomaticBid';
import Counter from 'components/Counter';

const Detail = ({ product }) => {
  const initialBid = product.last_bid ? product.last_bid.bid : product.initial_bid;

  return(
    <Grid container spacing={3} className="detail">
       <Grid item className="priceBid">
        <p>Current bid: ${initialBid}</p>
      </Grid>
      <p className="description">{product.description}</p>
      <Counter product={product} />
      <Grid item spacing={3} className="buttonsBid" container justify="space-between" alignItems="flex-end">
        <ButtonBid product={product} initialBid={initialBid} />
        <ButtonAutomaticBid product={product} />
      </Grid>
     
    </Grid>
  )
}

export default Detail;