import React from 'react';
import { Container, TextField, Grid, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';

const Search = () => {
  return (
    <>
      <Container className="search">
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              label="Search by name or description"
              id="outlined-margin-none"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Sort items</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Sort items"
                defaultValue="Sort items"
              >
                <MenuItem value={10}>Last Items</MenuItem>
                <MenuItem value={20}>Lowest Price</MenuItem>
                <MenuItem value={30}>Highest Price</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button variant="outlined" className="searchButton">Search</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Search;