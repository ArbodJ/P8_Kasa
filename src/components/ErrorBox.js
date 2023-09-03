import React from 'react';
import { Link } from 'react-router-dom';

const ErrorBox = () => {
  return (
    <div className='box-error'>
      <div className="box-error-title">
        <h1 className="title-error">404</h1>
      </div>
      <div className="box-error-phrase">
        <p className="explain-error">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="box-error-return-link">
        <Link to='/' className="link-return">
          Retournez sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default ErrorBox;