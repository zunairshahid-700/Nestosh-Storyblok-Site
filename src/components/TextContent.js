import React from 'react';
import {storyblokEditable } from "@storyblok/react";
import MarkdownRenderer from './helperComponents/MarkdownRenderer';

import './styles/TextContent.css';

const TextContent = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="container">
        <div className="c-info">
            <h3 className="c-info__title">
                {blok.Heading}
            </h3>
            <p className="c-info__text">
                <MarkdownRenderer markdown={blok.Content} />
            </p>
        </div>
    </div>
  );
};

export default TextContent;
