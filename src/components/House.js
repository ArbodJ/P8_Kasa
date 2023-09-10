import React from 'react';
import houses from "../data/logements.json";
import { Link } from 'react-router-dom';


const House = () => {

  return (
    <div className='house-card'>
      <div className="box-card">{houses.map(flat => {
        return (
          <Link to={`/rentfiles/${flat.id}`} className="card" key={flat.id}>
              <img src={flat.cover} alt={flat.title} className='card-img' />
              <div className="card-box-title">
                <p className="card-title">{flat.title}</p>
              </div>
          </Link>
        )
        })}
      </div>
    </div>
  );
};

export default House;