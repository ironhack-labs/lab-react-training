import React from "react";
import "./IdCard.css";

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
 
  return (
    <div className="allId">
    <div className="firsBlock">
   <img src={picture} alt="" />
   </div>
   <div className="secondBlock">
<p>First name: {firstName}</p>
<p>Last name: {lastName}</p>
<p>Gender: {gender}</p>
<p>Height: {height}</p>
<p>Birth: {birth}</p>
    </div>
    </div>
  );
};

export default IdCard;
