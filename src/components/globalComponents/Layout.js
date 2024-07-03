import React from 'react';
import Header from '../Header';
import logoImage from './../../Images/nestosh-logo.png'

const Layout = ({ children }) => {
  const logo = logoImage; 

  return (
    <>
      <Header logo={logo} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
