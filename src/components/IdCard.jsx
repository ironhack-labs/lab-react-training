import React from 'react';

function IdCard(props) {
    //const { idcard } = props;

    return (
    <div className="IdCard box">
          <h2>ID-Card</h2>
          <p>
      <img src={props.picture} alt={props.lastName}/>
    </p>      
    <p>
      <b>Last Name:</b> {props.lastName} | 
      <b>First Name:</b> {props.firstName} | 
      <b>Gender: {props.gender} </b> | 
      <b>Gender: {props.gender} </b> | 
      <b>Height: {props.height} </b> | 
      <b>Birth: {props.birth} </b>
    </p>


    </div>
      );

}

export default IdCard;