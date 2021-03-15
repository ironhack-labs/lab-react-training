import React from "react";

function IdCard(props) {
  console.log(props);

  return (
  
    <div className="IdCard">
      
      <h1 >First Name:{props.firstName}</h1>
      <h1>Last Name: {props.lastName}</h1>
      <p> Gender:{props.gender} </p>
      <p> Height:{props.height} </p>
      <p> Birth:{props.birth} </p>
      <img src={props.picture} alt=""/>
    </div>
  );
}

export default IdCard;