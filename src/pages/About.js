import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='box-pages-container'>
      <Navigation />
      <div className="title">
        <h1>A Propos</h1>
      </div>
      <Footer />
    </div>
  );
};

export default About;