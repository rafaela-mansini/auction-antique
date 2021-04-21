import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import api from 'services/api';

import Layout from 'components/Layout';
import Search from 'components/Search';
import Card from 'components/Card';

const Home = () => {

  const [products, setProducts] = useState();
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('products');
      await setProducts(response.data.data);
      await setAllProducts(response.data.data);
    }

    getProducts();
  }, []);

  const setSearchProducts = (data) => {
    setProducts(data);
  }

  return(
    <>
      <Layout>
        <Search setProducts={setSearchProducts} allProducts={allProducts} />
        <Container className="productList">
          <Grid container spacing={3}>
            {products && (
            products.map((product) => (<Card product={product} key={product.id} />))
            )}
          </Grid>
        </Container>

      </Layout>
    </>
  )
}

export default Home;