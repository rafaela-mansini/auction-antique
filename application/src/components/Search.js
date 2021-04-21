import React, { useEffect, useState } from 'react';
import { Container, TextField, Grid, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';
import api from 'services/api';

const Search = ({ setProducts, allProducts }) => {

  const [ description, setDescription ] = useState('');
  const [ sortBy, setSortBy ] = useState('');

  useEffect(() => {
    if(description === ''){
      setProducts(allProducts);
    }
  }, [description, sortBy]);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  }

  const search = async () =>{

    const searchedProducts = await api.post('products/search', {description, sortBy})
    setProducts(searchedProducts.data.data);
  }

  return (
    <>
      <Container className="search">
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              label="Search by name or description"
              id="outlined-margin-none"
              variant="outlined"
              defaultValue={description}
              onChange={(e) => handleDescription(e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Sort items</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Sort items"
                defaultValue={''}
                onChange={(e) => handleSortBy(e)}
              >
                <MenuItem value={'asc'}>Lowest Price</MenuItem>
                <MenuItem value={'desc'}>Highest Price</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button variant="outlined" className="searchButton" onClick={() => search()}>Search</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Search;