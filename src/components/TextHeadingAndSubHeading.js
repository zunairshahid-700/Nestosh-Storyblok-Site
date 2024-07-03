import React from 'react';
import { storyblokEditable } from '@storyblok/react';
// import './styles/TextAndImage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GlobalImage from './globalComponents/GlobalImage';

// import MarkdownRenderer from './helperComponents/MarkdownRenderer';

const TextHeadingAndSubHeading = ({ blok }) => {
    
  return (
    <div {...storyblokEditable(blok)} className="textAndImage">
      <div className="TextHeadingAndSubHeadingWrap text-center">
        <div className="container">
            <h2>{blok.Heading}</h2>
            <p>{blok.SubHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default TextHeadingAndSubHeading;
