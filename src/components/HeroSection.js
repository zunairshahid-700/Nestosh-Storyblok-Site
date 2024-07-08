import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import './styles/heroSection.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../Images/banner-bg.png'

import MarkdownRenderer from './helperComponents/MarkdownRenderer';

const HeroSection = ({ blok }) => {
  console.log(blok.additionalText.html);
  const backgroundImage = bgImage ;
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div {...storyblokEditable(blok)} className="heroSection" style={backgroundStyle} >
      <div className="HeroSectionWrap container">
        <div className="leftSection">
            <h1 className="annBarHeading">
            {blok.mainHeading}
            </h1>
            <p>{blok.subHeading}</p>
        </div>
        <div className="rightSection markdown-body text-center ">
          <MarkdownRenderer markdown={blok.additionalText.html} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
