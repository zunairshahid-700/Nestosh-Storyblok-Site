import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/footer.css';
import whatsapp from '../../Images/whatsapp.png';
import twitter from '../../Images/twitter.png';
import linkedin from '../../Images/linkedin.png';
import instagram from '../../Images/instagram.png';

const Footer = () => {
    const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };
  return (
    <div className="footer">
    <div className="footer_container">
      <div className="footer_row">
        <div className="footer_column">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>
        <div className="footer_column">
          <h5>Newsletter Signup</h5>
          <p>Subscribe to our Newsletter for Exclusive Updates</p>
          <form className="newsletter" onSubmit={handleFormSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
            />
            <button className="submit" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="social_icons">
        <p>ALL COPYRIGHT © RESERVED BY NESTOSH LLC 2024</p>
        <div className="social_icons_row">
        <Link to="https://wa.me/923316378674"><img className="img_fluid" src={whatsapp} alt="WhatsApp" /></Link>
        <Link to="https://www.linkedin.com/company/nestosh"><img className="img_fluid" src={linkedin} alt="LinkedIn" /></Link>
        <Link to="https://www.instagram.com/nestoshllc/"><img className="img_fluid" src={instagram} alt="Instagram" /></Link>
        <Link to="https://x.com/nestosh"><img className="img_fluid" src={twitter} alt="Twitter" /></Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
