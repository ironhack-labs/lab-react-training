import React from 'react';
import './IdCard.css';

function IdCard(props) {
  let height = props.height;
  let newHeight = height.toString();
  let finalHeight = newHeight.replace(/1/g, '1.');
  //   console.log('this is the string', newHeight);
  //   console.log('the final heihgt', finalHeight);
  //   let birthDate = props.birth.getDate();
  //   let birthMonth = props.birth.getMonth();
  //   let birthDay = props.birth.getDay();
  //   console.log(props.birth.getDay());

  return (
    <div className="id__card">
      <img className="id__photo" src={props.picture} alt="" />
      <div className="id__info">
        <h2 className="id__text">First Name:{props.firstName}</h2>
        <h2 className="id__text">Last Name: {props.lastName}</h2>
        <h3 className="id__text">Gender: {props.gender}</h3>
        <h3 className="id__text">Height: {finalHeight}</h3>
        <h3 className="id__text">
          <b>birth:</b> {props.birth.getFullYear()}
        </h3>
      </div>
    </div>
  );
}

export default IdCard;
