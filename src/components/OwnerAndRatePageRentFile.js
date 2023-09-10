import React from 'react';

const OwnerAndRatePageRentFile = (props) => {

  const imgOwner = props.host.picture;
  const nameOwner = props.host.name;
  const starRating = parseInt(props.rate);
  console.log(starRating);
  const starNumber = [1, 2, 3, 4, 5];

  return (
    <div className='owner-and-rate-box'>
      <div className="rate-box">
        {starNumber.map((id) => id <= starRating ? (<i key={id}  className="fa-solid fa-star " style={{color: '#FF6060'}} ></i>) : (<i key={id} className="fa-solid fa-star " style={{color: '#E3E3E3'}}></i>)
        )}
      </div>
      <div className="owner-box">
        <p className="owner-name">{nameOwner}</p>
        <img src={imgOwner} alt={nameOwner} className="owner-picture" />
      </div>
    </div>
  );
};

export default OwnerAndRatePageRentFile;