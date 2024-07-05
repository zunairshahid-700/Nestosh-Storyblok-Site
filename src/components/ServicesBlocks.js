import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import './styles/ServicesBlocks.css';


const ServicesBlocks = ({ blok }) => {
    const backgroundImage = blok.ServiceBackgroundImage?.filename || '';
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };


  return (
    <div {...storyblokEditable(blok)} className="ServicesBlocks column img_bg" style={backgroundStyle} >
        <p>{blok.ServiceName}</p>
        <img className='ServicesBlockSImages img_fluid' src={blok.ServiceImage.filename} alt="Logo" />
        <p class="hover_txt">
                  NESTOSH LLC is proud to have a workforce that leads the organization and its clients towards 
                  success with the most talented and creative professionals working in its team.
                  NESTOSH LLC is proud to have a workforce that leads the organization and its clients towards 
                  success with the most talented and creative professionals working in its team.
        </p>
    </div>
  );
};

export default ServicesBlocks;
