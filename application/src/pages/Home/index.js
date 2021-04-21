import React from 'react';
import { Grid, Container } from '@material-ui/core';

import Layout from 'components/Layout';
import Search from 'components/Search';
import Card from 'components/Card';
// import CardProduct from 'components/CardProduct';

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Product one",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      initialBid: 15,
      expireTime: new Date('2021', '04', '21', '12', '27')
    },
    {
      id: 2,
      name: "Product two",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      initialBid: 15,
      expireTime: new Date('2021', '04', '21', '12', '27')
    },
    {
      id: 3,
      name: "Product three",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      initialBid: 15,
      expireTime: new Date('2021', '04', '21', '12', '27')
    },
    {
      id: 4,
      name: "Product four",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      initialBid: 15,
      expireTime: new Date('2021', '04', '21', '12', '27')
    },
    {
      id: 5,
      name: "Product five",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      initialBid: 15,
      expireTime: new Date('2021', '04', '21', '12', '27')
    },
  ];
  return(
    <>
      <Layout>
        <Search />
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