import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/header.css';

const Header = ({ menus, logo, megamenuImage, hamburger, hamburgerWhite, whiteLogo }) => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
        console.log("log skldjasldjlj");
      } else {
        setIsScrolled(false);
      }
    };
    if (!isHomepage) {
      window.addEventListener('scroll', handleScroll);
      console.log("ot needs to work");
    }
    // window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`c-site-header ${isHomepage ? '' : (isScrolled ? 'scrolled' : 'lp-header')}`}>
      <nav className="c-site-header__navbar navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img className="navbar-toggler-icon lp-logo-none" src={hamburger} alt="Toggle" />
            <img className="navbar-toggler-icon lp-logo-block" src={hamburgerWhite} alt="toggle" />
          </button>
          <Link className="navbar-brand lp-logo-none" to="/">
            {logo ? (
              <img src={logo} alt="logo" className="c-site-header__logo" />
            ) : (
              <span>No Logo Available</span>
            )}
          </Link>
          <Link className="navbar-brand lp-logo-block" to="/">
            {whiteLogo ? (
              <img src={whiteLogo} alt="logo" className="c-site-header__logo" />
            ) : (
              <span>No Logo Available</span>
            )}
          </Link>
          <Link to="#" className="btn-primary d-block d-lg-none">Let's Talk</Link>
          <div className="collapse navbar-collapse justify-content-lg-center" id="navbarSupportedContent">
            <button
              className="btn-close-custom d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Close navigation"
            >
              &times;
            </button>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link className="nav-link" to="/what-we-do" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  what we do
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  what we think
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Who we are
                </Link>
                <ul className="dropdown-menu dropdown-menu-fullwidth" aria-labelledby="whoWeAreDropdown">
                  <div className="row">
                    <div className="col-3 d-none d-lg-block">
                      <div className="dropdown-item-wrap">
                        <img src={megamenuImage} className="img-fluid" alt="mega menu" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="dropdown-item-wrap">
                        <Link className="dropdown-item" to="/about">About</Link>
                        <Link className="dropdown-item" to="#">Work</Link>
                        <Link className="dropdown-item" to="#">Get In Touch</Link>
                        <Link className="dropdown-item" to="#">Get In Touch</Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Careers
                </Link>
                <ul className="dropdown-menu dropdown-menu-fullwidth" aria-labelledby="whoWeAreDropdown">
                  <div className="row">
                    <div className="col-3 d-none d-lg-block">
                      <div className="dropdown-item-wrap">
                        <img src={megamenuImage} className="img-fluid" alt="megamenu" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="dropdown-item-wrap">
                        <Link className="dropdown-item" to="#">Benefits</Link>
                        <Link className="dropdown-item" to="#">Jobs</Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="#" className="btn-primary mt-4 mt-lg-0 d-none d-lg-block">Let's Talk</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
