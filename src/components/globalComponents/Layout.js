import React from 'react';
import Header from '../Header';
import logoImage from './../../Images/nestosh-logo.png'

const Layout = ({ children }) => {

  return (
    <>
      <Header logo={logoImage} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
