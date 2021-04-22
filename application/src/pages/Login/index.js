import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import Logo from 'assets/logo.png';
import './style.css';

const Login = () => {

  const userLogged = localStorage.getItem('@auction/user');

  return(
    <>
      {userLogged ? (
        <Redirect to="/products" />)
        : (
          <div className="bodyLogin">
            <div className="login">
              <form className="form">
                <div className="logo">
                  <img src={Logo} alt="Logotype" />
                </div>
                <TextField id="standard-basic" label="Username" />
                <Button variant="outlined" color="primary" className="form__custom-button" size="large">
                  Log in
                </Button>
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Login;