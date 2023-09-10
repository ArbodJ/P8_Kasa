import React, { useState } from 'react';

const Carrousel = (props) => {
  
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index +1 === props.pictures.length){
      setIndex(0)
    } else {
      setIndex(index+1);
    }
  }
  const previous = () => {
    if (index === 0) {
      setIndex(props.pictures.length-1)
    } else {
      setIndex(index-1);
    }
  }

  return (
    <div className='slide-box'>
      <img src={props.pictures[index]} alt='appartement' className='img-slide' />
      <div className="arrows-slide">
      <i className="fa-solid fa-chevron-left arrow-item" onClick={previous}></i>
      <i className="fa-solid fa-chevron-right arrow-item" onClick={next}></i>
      </div>
      <div className="number-img-slide">
        <span className="display-number">{index+1}/{props.pictures.length}</span>
      </div>
    </div>
  );
};

export default Carrousel;