import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';

import DefaulImage from 'assets/products/antiques.jpg';

const Card = ({ product }) => {
  return(
    <Grid item xs={12} sm={4}>
      <Paper className="productItem">
        <img  alt={product.image} src={DefaulImage} className="productImage" />
        <div className="productDescription">
          <h2 className="title">{product.name}</h2>
          <p className="description">{product.description}</p>
          <span className="counter">Expired at 1 day</span>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <p>Minimum from bid: ${product.initialBid}</p>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className="buttonBid">
                BID
              </Button>
            </Grid>
          </Grid>

        </div>
      </Paper>
    </Grid>
  )
}

export default Card;