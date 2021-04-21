import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';

const Navbar = () => {
  return(
    <>
      <div className="navbar">
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Link to="/">
              <img src={Logo} alt="Logotype from company" />
            </Link>
          </Grid> 
        </Container>
      </div>
    </>
  );
}

export default Navbar;