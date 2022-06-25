import React from 'react';

const IdCard = (props) => {
  return (
    <div className="container">
      <img src={props.picture} alt="Id picture" className="idPicture" />
      <div className="info">
        <p>{`First name : ${props.firstName}`}</p>
        <p>{`Last name : ${props.lastName}`}</p>
        <p>{`Gender : ${props.gender}`}</p>
        <p>{`Height : ${props.height}`}</p>
        <p>{`Birth : ${props.birth}`}</p>
      </div>
    </div>
  );
};

export default IdCard;
