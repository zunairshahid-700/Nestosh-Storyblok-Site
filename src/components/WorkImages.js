import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import './styles/work.css';

const WorkImages = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="WorkImages icon_column ">
            <img className='WorkImages' src={blok.Images.filename} alt="Logo" />
    </div>
  );
};

export default WorkImages;
