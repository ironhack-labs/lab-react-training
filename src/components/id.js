import React from 'react';


export default function IdCard(props){
   let birth =  props.date.toDateString();

    return (
      <div className="id-card">
      <img src={props.picture}
       alt={props.firstName} />
        <ul>
          <li>First Name: {props.firstName}</li>
          <li>Last Name: {props.lastName}</li>
          <li>Gender: {props.gender}</li>
          <li>Height: {props.height}</li>
          <li>Birth: {birth}</li>
        </ul>

      </div>
    );
}