import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ErrorBox from '../components/ErrorBox';

const PageNotFound = () => {
  return (
    <div className='box-pages-container'>
      <Navigation />
      <ErrorBox />
      <Footer />
    </div>
  );
};

export default PageNotFound;