import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import DefaulImage from 'assets/products/antiques.jpg';

const Card = ({ product }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Paper className="productItem">
        <img alt={product.name} src={DefaulImage} className="productImage" />
        <div className="productDescription">
          <Link className="linkBid" to={`/products/${product.id}`}><h2 className="title">{product.name}</h2></Link>
          <p className="description">{product.description}</p>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Link className="linkToDetail" to={`/products/${product.id}`}>
              Bid Now
            </Link>
          </Grid>
        </div>
      </Paper>
    </Grid>
  )
}

export default Card;