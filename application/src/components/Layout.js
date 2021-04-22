import React from 'react';
import { Redirect } from 'react-router-dom';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import isLogged from 'helpers/isLogged';
import './styles.css';

const Layout = ({ children }) => {
  const userIsLogged = isLogged();
  if(!userIsLogged){
    return(<Redirect to="/" />);
  }

  return(
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  );
}

export default Layout;