import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PageNotFound = () => {
  return (
    <div className='box-pages-container'>
      <Navigation />
      <h1>Page non trouvée Err:: 404</h1>
      <Footer />
    </div>
  );
};

export default PageNotFound;