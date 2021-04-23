import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

import api from 'services/api';
import Layout from 'components/Layout';
import Detail from "./Detail";
import DefaulImage from 'assets/products/antiques.jpg';
import './style.css';

const ProductDetail = () => {
  
  const { id } = useParams();
  const [ product, setProduct ] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await api.get(`products/${id}`);
      await setProduct(response.data.data);
    }
  
    getProduct();
  }, []);

  return(
    <Layout>
      {product ?(
        <Container className="details">
          <h1 className="title">{product.name}</h1>

          <Grid container spacing={3} direction="row" justify="space-between">
            <Grid item xs={12} sm={8}>
              <img alt={product.name} src={DefaulImage} className="productImage" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Detail product={product} />
            </Grid>

          </Grid>
        </Container>
      )
      : (
        <h1>This product is not found</h1>
      )}
    </Layout>
  )
}

export default ProductDetail;