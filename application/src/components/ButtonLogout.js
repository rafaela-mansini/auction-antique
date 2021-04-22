import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const ButtonLogout = () => {

  const [ isLogout, setIsLogout ] = useState(false);

  const logout = () => {
    localStorage.removeItem('@auction/user');
    setIsLogout(true);
  }

  return(
    <>
    {isLogout ?(
      <Redirect to="/" />
    ) : (
      <Button
        onClick={() => logout()}
        variant="outlined"
        style={{background: '#fff'}}
      >
        Logout
      </Button>
    )
    }
    </>
  )
}

export default ButtonLogout;