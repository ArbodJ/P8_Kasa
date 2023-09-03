import React from 'react';
import logements from "../data/logements.json";
import { Link } from 'react-router-dom';


const House = () => {

  return (
    <div className='house-card'>
      <div className="box-card">{logements.map(logement => {
        return (
          <Link to={`/rentfiles/${logement.id}`} className="card" key={logement.id}>
              <img src={logement.cover} alt={logement.title} className='card-img' />
              <div className="card-box-title">
                <p className="card-title">{logement.title}</p>
              </div>
          </Link>
        )
        })}
      </div>
    </div>
  );
};

export default House;