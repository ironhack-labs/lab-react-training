import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default function Random(props) {
    var randomNum = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    var random = `Random value between ${props.min} and ${props.max} => ${randomNum}`;


    return (
      <div>
        <h3>{random}</h3>
      </div>
    );

}