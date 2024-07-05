import React from 'react';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import './styles/ServicesBlocks.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="services_sec Services main container">
        <div className="inner_container">
            <h3>{blok.Heading}</h3>
            <p>{blok.SubHeading}</p>
        </div>
        <div className="ServicesBlocksContent services_sec_row row">
        {blok.ServicesBlocks.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
        </div>
    </div>
 

  );
};

export default Services;
