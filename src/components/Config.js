import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import Header from './globalComponents/Header';

const Config = ({ blok }) => {
  // const logoImage = blok.logo?.filename || '';

  return (
    <div {...storyblokEditable(blok)} className="config">
      <Header menus={blok.menus} logo={blok.logo.filename} />
    </div>
  );
};

export default Config;
