import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/TextAndImage.css';
// import GlobalImage from './globalComponents/GlobalImage';

const TextAndImage = ({ blok }) => {
    const image = blok.Image?.filename || '';
    const isImageOnRight = blok.ImageOnRight;
     
  return (
    <div {...storyblokEditable(blok)} className="textAndImage c-intro__content__wrap">
      <div className="TextAndImageWrap row justify-content-center align-items-center">

      {!isImageOnRight && (
          <div className="col-12 col-md-7">
            <div className="c-intro__content__img-holder">
              <img className="c-intro__content__img" src={image} alt={blok.Heading} />
            </div>
          </div>
        )}
        <div className={`col-12 col-md-5 ${isImageOnRight ? 'order-section' : ''}`}>
          <div className="c-intro__content__text-holder">
            <h3 className="c-intro__content__text-holder__heading">{blok.Heading}</h3>
            <p className="c-intro__content__text">
              {blok.Description}
            </p>
          </div>
        </div>
        {isImageOnRight && (
          <div className="col-12 col-md-7">
            <div className="c-intro__content__img-holder">
              <img className="c-intro__content__img" src={image} alt={blok.Heading} />
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default TextAndImage;