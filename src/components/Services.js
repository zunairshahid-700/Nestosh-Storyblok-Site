import React, { useState, useEffect } from 'react';
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/ServicesBlocks.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = ({ blok }) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        // Initial check
        handleResize();
    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup event listener
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const sliderSettings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div {...storyblokEditable(blok)} className="services_sec Services main container">
    <div className="services_sec inner_container">
      <h3>{blok.Heading}</h3>
      <p>{blok.SubHeading}</p>
    </div>
    <div className="ServicesBlocksContent services_sec_row row">
      {isMobile ? (
        <Slider {...sliderSettings}>
          {blok.ServicesBlocks.map((blok) => (
            <div key={blok._uid}>
              <StoryblokComponent blok={blok} />
            </div>
          ))}
        </Slider>
      ) : (
        blok.ServicesBlocks.map((blok) => (
          <div className="col-12 col-md-4" key={blok._uid}>
            <StoryblokComponent blok={blok} />
          </div>
        ))
      )}
    </div>
  </div>

  );
};

export default Services;
