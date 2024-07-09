import React from 'react';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/work.css';

const Work = ({ blok }) => {
     
  return (
    <div {...storyblokEditable(blok)} className="Work ourwork_sec inner_container">
        <h3>{blok.Heading}</h3>
        <p>{blok.SubHeading}</p>
        
        <div className="ourwork_sec_row row">
            {blok.Images.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
        </div>
        <div class="button">
            <a href="/view-all">View All</a>
        </div>

    </div>
  );
};

export default Work;
