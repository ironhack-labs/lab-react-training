import React from 'react';

function IdCard(props) {
  return (
    <div className="IdCard">
     
      <p className="IdCard__firstName">{props.firstName}</p>
      <p className="IdCard__lastName">{props.lastName}</p>
      <p className="IdCard__gender">{props.gender}</p>
      <p className="IdCard__height">{props.height}</p>   
      <p className="IdCard__birth">{props.birth} </p>
      <img className="IdCard__picture" src= {props.picture} alt=""/>
    </div>
  );
}

export default IdCard;
