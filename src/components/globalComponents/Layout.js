import React from 'react';
import Header from './Header';
import logoImage from './../../Images/nestosh-logo.png';
import megamenuImage from './../../Images/Rectangle.png';
import hamburger from './../../Images/hamburger-icon.png'
import Footer from './Footer';

const Layout = ({ children }) => {
  const logo = logoImage;


  return (
    <>
      <Header logo={logoImage} megamenuImage={megamenuImage} hamburger={hamburger} />
      <main>{children}</main>
      <Footer />

    </>
  );
};

export default Layout;
