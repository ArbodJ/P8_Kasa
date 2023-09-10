import React, { useState } from 'react';

const Collapse = (props) => {
  const [open, setOpen ] =  useState(false);
  return (
    <div className='option-box'>
      <button className='box-button-about' onClick={() => setOpen(!open)}>
        <div className="text-icon-button">
          <p className="title-button">{props.title}</p>
          <i className={`fa-solid ${open? "fa-chevron-down" : "fa-chevron-up"}`}></i>
        </div>
      </button>
      {open&&(
        <div className='box-text-about'>
          <p className='text-about'>{props.description}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;