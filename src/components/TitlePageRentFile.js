import React from 'react';
import { useParams } from 'react-router-dom';
import houses from "../data/logements.json";

const TitlePageRentFile = () => {
  const id = useParams();
  const flatList = houses.find(flat => flat.id === id.id);
  const tagHouses = flatList?.tags.map((tag, id) => {
    return <p className="text-tag" key={id} tags={tag}>{tag}</p>
  })
  
  

  return (
    <div className='detail-box'>
      <div className="title-box">
        <h1 className="title-rent">{flatList.title}</h1>
        <p className="location-rent">{flatList.location}</p>
      </div>
        <div className="tag-text" >
          {tagHouses}
        </div>
    </div>
    
  );
};

export default TitlePageRentFile;