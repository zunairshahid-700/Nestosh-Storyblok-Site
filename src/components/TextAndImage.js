import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import './styles/TextAndImage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalImage from './globalComponents/GlobalImage';

const TextAndImage = ({ blok }) => {
    const image = blok.Image?.filename || '';
    const isImageOnRight = blok.ImageOnRight;
     
  return (
    <div {...storyblokEditable(blok)} className="textAndImage">
      <div className="TextAndImageWrap">

      {!isImageOnRight && (
          <div className="leftSection text-center mx-5">
            <GlobalImage
              src={image}
              alt="Example Image"
              width="400"
              height="auto"
              className="global-image m-auto"
            />
          </div>
        )}
        <div className="rightSection text-center w-75">
          <h1>{blok.Heading}</h1>
          <p>{blok.Description}</p>
        </div>
        {isImageOnRight && (
          <div className="leftSection text-center mx-5">
            <GlobalImage
              src={image}
              alt="Example Image"
              width="400"
              height="auto"
              className="global-image m-auto"
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default TextAndImage;
