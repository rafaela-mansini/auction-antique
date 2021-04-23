import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import Logo from 'assets/logo.png';
import api from 'services/api';
import './style.css';

const Login = () => {

  const [ invalidUser, setInvalidUser ] = useState(false);
  const [ userLogged, setUserLogged ] = useState(false);
  const [ username, setUsername ] = useState();

  const handleUsername = (e) => setUsername(e.target.value);

  const login = async () => {
    const response = await api.post('login', {username});
    if(response.data.data == null){
      setInvalidUser(true);
    } else {
      setInvalidUser(false);
      localStorage.setItem('@auction/user', response.data.data.id);
      setUserLogged(true);
    }
  }

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
                <TextField 
                  id="standard-basic" 
                  label="Username"
                  value={username}
                  onChange={(e) => handleUsername(e)}
                />
                {invalidUser && (
                  <Alert severity="error">Invalid user in the system!</Alert>
                )}
                <Button 
                  variant="outlined"
                  color="primary"
                  className="form__custom-button"
                  size="large"
                  onClick={() => login()}
                >
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