import React from 'react';

const IdCard = (props) => {
  return (
    <div className="row border border-dark align-items-center p-1 my-1">
      <div className="">
        <img src={props.picture} alt="profile" />
      </div>
      <div className="">
        <p className="m-2">
          <b>First Name:</b> {props.firstName} <br />
          <b>Last Name:</b> {props.lastName} <br />
          <b>Gender:</b> {props.gender} <br />
          <b>Height:</b> {props.height} <br />
          <b>Birth:</b> {props.birth} <br />
        </p>
      </div>
    </div>
  );
};

export default IdCard;
