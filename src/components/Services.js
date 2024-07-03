import React from 'react';
// import { storyblokEditable } from '@storyblok/react';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import './styles/ServicesBlocks.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="Services">
      <div className="ServicesWrap">
        <div className="ServicesContent">
            <h1>{blok.Heading}</h1>
            <p>{blok.SubHeading}</p>
        </div>
        <div className="ServicesBlocksContent">
        {blok.ServicesBlocks.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
