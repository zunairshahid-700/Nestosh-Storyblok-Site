// GlobalImage.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GlobalImage.css'; 

const GlobalImage = ({ src, alt, width, height, className, style, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      {...props}
    />
  );
};

GlobalImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
};

GlobalImage.defaultProps = {
  width: 'auto',
  height: 'auto',
  className: '',
  style: {},
};

export default GlobalImage;
