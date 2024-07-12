import React from 'react';
import {storyblokEditable } from "@storyblok/react";
import bannerImage from './../Images/banner.png';
import MarkdownRenderer from './helperComponents/MarkdownRenderer';

import './styles/banner.css';

const Banner = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="c-banner">
      <figure className="c-banner__image">
        <img className="c-banner__img" src={bannerImage} alt="banner-image" />
      </figure>
      <div className="c-banner__wrap container">
        <p className="c-banner__wrap__title">
          <MarkdownRenderer markdown={blok.Text} />
        </p>
      </div>
    </div>
  );
};

export default Banner;
