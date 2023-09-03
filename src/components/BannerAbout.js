import React from 'react';
import imgBanner2 from './../assets/img/Image-source-2.png';

const BannerAbout = () => {
  return (
    <div className='banner-container'>
      <div className="banner-dark">
        <div className="banner-box-img">
          <img className="banner-img" src={imgBanner2} alt="recif marin" />
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;