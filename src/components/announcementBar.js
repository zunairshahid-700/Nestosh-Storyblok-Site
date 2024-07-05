import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import "./styles/announcementBar.css";

const AnnouncementBar = ({ blok }) => {

  return (
    <section {...storyblokEditable(blok)} class="c-bar">
        <div class="container-fluid">
            <div class="c-bar__wrap">
                <p class="c-bar__wrap__text"> {blok.Text}</p>
            </div>
        </div>
    </section>
  );
};

export default AnnouncementBar;
