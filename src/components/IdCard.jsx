import React from 'react';

const IdCard = (props) => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col card col-md-2 my-1 border-dark mx-auto">
          <div className="cold-md4 picture my-2">
            <img src={props.picture} alt={props.firstName} />
          </div>
          <div>
            <div>Last Name: {props.lastName}</div>
            <div>First Name: {props.firstName}</div>
            <div>Gender: {props.gender}</div>
            <div>Height: {props.height}</div>
            <div>Date of Birth: {props.birth.toUTCString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
