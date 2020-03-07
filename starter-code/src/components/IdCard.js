import React from "react";
import '../styles/IdCard.css';

function IdCard(props) {
    return (
        <div className="idCardContainer">
            <div>
            <img src={props.image}></img>
            </div>
            <div className="">
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth: {props.birthDate}</p>
            </div>
        </div>
    );
}
  
  export default IdCard;
  
