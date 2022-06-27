import React from 'react';

const IdCard = (props) => {
  return (
    <>
      <div className="image">
        <img src={props.picture} alt="profile image"></img>
      </div>
      <div className="info">
        <p>{`First Name:${props.firstName}`}</p>
        <p>{`Last Name: ${props.lastName}`}</p>
        <p>{`Gender:${props.gender}`}</p>
        <p>{`height:${props.height}`}</p>
        <p>{`brith:${props.birth}`}</p>
      </div>
    </>
  );
};

export default IdCard;
