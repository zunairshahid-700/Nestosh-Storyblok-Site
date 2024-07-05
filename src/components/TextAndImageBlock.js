import React from 'react';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/TextAndImage.css';

const TextAndImageBlock = ({ blok }) => {
     
  return (
        <div {...storyblokEditable(blok)} class="container TextAndImageBlock">
            <div class="c-intro">
                <div class="c-intro__header">
                    <h3 class="c-intro__header__title">PARTNERING WITH TECH LEADERS</h3>
                    <p class="c-intro__header__text">
                        NESTOSH LLC is proud to have a workforce that leads the organization and its clients
                        towards success with the most talented and creative professionals working in its team.
                    </p>
                </div>
                <div class="c-intro__content">
                    {blok.Technology.map((blok) => (
                        <StoryblokComponent blok={blok} key={blok._uid} />
                    ))}
                </div>
            </div>
    </div>
  );
};

export default TextAndImageBlock;
