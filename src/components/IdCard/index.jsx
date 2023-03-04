import React from 'react';
import './index.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture}) => {
  const parseDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
  }
  return (
    <div className='IdCard'>
      <img src={picture}/>
      <div>
        <p><b>First name: </b>{firstName}</p>
        <p><b>Last name: </b>{lastName}</p>
        <p><b>Gender: </b>{gender}</p>
        <p><b>Height: </b>{height}</p>
        <p><b>Birth: </b>{parseDate(birth)}</p>
      </div>
    </div>
  );
};

export default IdCard;