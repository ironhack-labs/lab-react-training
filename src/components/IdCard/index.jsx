import './index.css';
import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const renderData = (name, value) => {
    return (
      <p>
        <strong>{name}: </strong>
        {value}
      </p>
    );
  };
  return (
    <div className="IdCard">
      <img src={picture} alt={firstName} />
      <div>
        {renderData('First Name', firstName)}
        {renderData('Last Name', lastName)}
        {renderData('Gender', gender)}
        {renderData('Height', height / 100)}
        {renderData('Birth', birth.toDateString())}
      </div>
    </div>
  );
}

export default IdCard;
