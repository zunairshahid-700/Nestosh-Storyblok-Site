import React from 'react';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import './styles/Team.css';

const Team = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="container">
        <div class="c-team">
            <h3 class="c-team__title">
               {blok.Heading}
            </h3>
            <div class="c-team__wrap">
                <div class="row c-team__wrap__f-line">
                {blok.TeamBlocks.map((blok) => (
                    <StoryblokComponent blok={blok} key={blok._uid} />
                ))}
                </div>
            </div>
            <div class="c-team__btn-holder">
                {/* <a class="c-team__btn-holder__btn btn-primary">
                    View our team
                </a> */}
            </div>
        </div>
    </div>
    
  );
};

export default Team;
