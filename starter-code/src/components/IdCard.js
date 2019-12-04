import React from 'react';
import { IdCard } from "../styles/components";

function IdCardComponent (props) {

  return(
      <IdCard>
          <img src={props.picture} alt="Profile"/>
          <div>
              <p><strong>First name:</strong> {props.firstName}</p>
              <p><strong>Last name:</strong> {props.lastName}</p>
              <p><strong>Gender:</strong> {props.gender}</p>
              <p><strong>Height:</strong> {props.height}</p>
             
          </div>
      </IdCard>
  );
}

export default IdCardComponent;