import React from 'react';
import imgBanner from './../assets/img/IMG.png';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className="banner-dark">
        <div className="banner-box-img">
            <img className="banner-img" src={imgBanner} alt="recif marin" />
            <div className="banner-box-title">
              <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;