import React from 'react';
import Header from './Header';
import logoImage from './../../Images/nestosh-logo.png';
import megamenuImage from './../../Images/Rectangle.png';
import hamburger from './../../Images/hamburger-icon.png';
import hamburgerWhite from './../../Images/toggler-white.png';
import whiteLogo from './../../Images/nestosh-white.png';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header logo={logoImage} megamenuImage={megamenuImage} hamburger={hamburger} hamburgerWhite={hamburgerWhite} whiteLogo={whiteLogo} />
      <main>{children}</main>
      <Footer />

    </>
  );
};

export default Layout;
