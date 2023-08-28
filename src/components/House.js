import React from 'react';
import logements from "../data/logements.json";
import { Link } from 'react-router-dom';


const House = () => {

  return (
    <div className='house-card'>
      <div className="box-card">{logements.map(logement => {
        return (
          <Link to="/rentfiles" className="card" key={logement.id}>
                {logement.cover}
              {/* <Link to="/rentfiles" className='link-card'> */}
              <div className="card-box-title">
                <p className="card-title">{logement.title}</p>
              </div>
              {/* </Link> */}
          </Link>
        )
        })}
      </div>
    </div>
  );
};

export default House;