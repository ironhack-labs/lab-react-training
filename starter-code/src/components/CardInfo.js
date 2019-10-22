import React from 'react';

const CardInfo = (props) => {

  return (
    <div>
      <div className="idCard box">
        <img src={props.image} alt="" />
        <div className="right">
          <strong> First Name </strong> : {props.firstname}
          <br />
          <strong> Last Name</strong> : {props.lastName}
          <br />
          <strong> Gender</strong> : {props.gender}
          <br />
          <strong> Height </strong> : {props.height}
          <br />
          <strong> Birth date </strong> : {props.birth}
          <br />
        </div>
      </div>
    </div>
  )
}


export default CardInfo;