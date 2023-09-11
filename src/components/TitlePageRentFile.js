import React from 'react';

const TitlePageRentFile = (props) => {

  const tagHouses = props.tags.map((tags,index) => {
    return <p className="text-tag" key={index}>{tags}</p> 
  });
  
  return (
    <div className='detail-box'>
      <div className="title-box">
        <h1 className="title-rent">{props.title}</h1>
        <p className="location-rent">{props.location}</p>
      </div>
        <div className="tag-text" >
          {tagHouses}
        </div>
    </div>
  );
};

export default TitlePageRentFile;