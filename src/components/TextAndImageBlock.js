import React from 'react';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import './styles/TextAndImage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TextAndImageBlock = ({ blok }) => {
    const image = blok.Image?.filename || '';
    console.log("image", image);
     
  return (
    <div {...storyblokEditable(blok)} className="TextAndImageBlock">
      {blok.Technology.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}


    </div>
  );
};

export default TextAndImageBlock;
