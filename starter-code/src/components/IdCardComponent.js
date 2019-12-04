import React from "react";
import { IdCard } from "../styles/components";

function IdCardComponent(props) {
  return (
    <IdCard>
        <img src={props.picture} alt='profile'/>
        <div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p> 
            <p> Gender: {props.gender}</p>
            <p>Height: {props.height} </p>
            <p>Birth:</p>
        </div>
    </IdCard>
  );
    
}

export default IdCardComponent;