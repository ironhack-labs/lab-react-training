import React from 'react';
const IdCard = (props) => {
  return (
    <div className='id-card col-11 col-sm-5 p-0'>
      <div className='image'>
        <img src={props.picture} />
      </div>
      <div>
        <p>
          <strong> First Name </strong>
          {props.firstName}
        </p>
        <p>
          <strong> Last Name </strong>
          {props.lastName}
        </p>
        <p>
          <strong> Gender </strong>
          {props.gender}
        </p>
        <p>
          <strong> Height </strong>
          {props.height}m
        </p>
        <p>
          <strong> Birthday </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};
export default IdCard;