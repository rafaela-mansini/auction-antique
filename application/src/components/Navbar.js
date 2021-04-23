import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Logo from 'assets/logo.png';
import ButtonLogout from 'components/ButtonLogout';

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
            <Link to="/products">
              <img src={Logo} alt="Logotype from company" />
            </Link>
            <ButtonLogout />
          </Grid> 
        </Container>
      </div>
    </>
  );
}

export default Navbar;