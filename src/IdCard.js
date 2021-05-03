import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function IdCard(props){
    console.log(props);
    return (
      <div className="profileContainer">
        <div>
          <img src={props.picture} alt="picture" />
        </div>
        <div className="information">
          <p>First Name: {props.firstName}</p>
          <p>Last Name: {props.lastName}</p>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}m</p>
          <p>Birth: {props.birth.toString().slice(0, 10)}</p>
        </div>
      </div>
    );
}