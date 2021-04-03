import React from 'react';
import '../1. Id Card/IdCard.css';

const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture} = props;
  return (
    <div className="IdCard">
      <img className="imgCard " src={picture} alt="" />
      <ul className="listCard">
        
          <p className="pCard">First name: {firstName}</p>
        
        
          <p className="pCard">Last name: {lastName}</p>
        
        
          <p className="pCard">Gender: {gender}</p>
        
        
          <p className="pCard">Height: {height}</p>
        
        
          <p className="pCard">Birth: {birth}</p>
        
      </ul>
    </div>
  );
};

export default IdCard;
