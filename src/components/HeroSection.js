import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import './styles/heroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MarkdownRenderer from './helperComponents/MarkdownRenderer';

const HeroSection = ({ blok }) => {
  console.log(blok.additionalText.html);

  return (
    <div {...storyblokEditable(blok)} className="heroSection">
      <div className="HeroSectionWrap">
        <div className="leftSection text-center mx-5">
            <h1 className="annBarHeading">
            {blok.mainHeading}
            </h1>
            <p>{blok.subHeading}</p>
        </div>
        <div className="rightSection markdown-body text-center">
          <MarkdownRenderer markdown={blok.additionalText.html} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
