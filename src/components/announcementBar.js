import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import "./styles/announcementBar.css";

const AnnouncementBar = ({ blok }) => {

  return (
    <div {...storyblokEditable(blok)} className="announcementBar">
      <div className="annBarWrap">
        <p className="annBarHeading">
            {blok.Text}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
