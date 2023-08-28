import React from 'react';
import Navigation from '../components/Navigation';
import House from '../components/House';
import Banner from '../components/Banner';
import logements from "../data/logements.json";
import Footer from '../components/Footer';

const Home = () => {
  console.log(logements);
  return (
    <div className='box-pages-container'>
      <Navigation />
      <Banner />
      <House />
      <Footer />
    </div>
  );
};

export default Home;