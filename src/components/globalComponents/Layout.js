import React from 'react';
import Header from './Header';
import logoImage from './../../Images/nestosh-logo.png';
import megamenuImage from './../../Images/Rectangle.png';

const Layout = ({ children }) => {
  const logo = logoImage;


  return (
    <>
      <Header logo={logo} megamenuImage={megamenuImage} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
