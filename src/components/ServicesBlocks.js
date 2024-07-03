import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import './styles/ServicesBlocks.css';

const ServicesBlocks = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="ServicesBlocks">
        <h2>{blok.ServiceName}</h2>
        <img className='ServicesBlockSImages' src={blok.ServiceImage.filename} alt="Logo" />
    </div>
  );
};

export default ServicesBlocks;
