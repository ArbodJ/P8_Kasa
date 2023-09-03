import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BannerAbout from '../components/BannerAbout';
import DropDownBox from '../components/DropDownBox';

const About = () => {
  return (
    <div className='box-pages-container'>
      <Navigation />
      <BannerAbout />
      <DropDownBox />
      <Footer />
    </div>
  );
};

export default About;