import React from 'react';
import houses from "../data/logements.json";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import TitlePageRentFile from '../components/TitlePageRentFile';
import OwnerAndRatePageRentFile from '../components/OwnerAndRatePageRentFile';
import Collapse from '../components/Collapse';

const RentFile = () => {
  const params = useParams();
  const flatList = houses.find(flat => flat.id === params.id);
  const optionsList = flatList?.equipments.map((equipment, id) => {
    return <li className="list-option" key={id} equipments={equipment}>{equipment}</li>
  })
  // console.log(flatList);
  return (
    <div className='box-pages-container'>
      <Navigation />
      <Carrousel pictures={flatList.pictures} />
      <div className="box-title-rate-owner">
        <TitlePageRentFile />
        <OwnerAndRatePageRentFile host={flatList.host} rate={flatList.rating}/>
      </div>
      <div className="box-options-rent">
        <Collapse title="Description" description={flatList.description}/>
        <Collapse title="Èquipement" description={optionsList} />
      </div>
      <Footer />
    </div>
  );
};

export default RentFile;