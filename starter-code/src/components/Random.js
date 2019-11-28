import React from "react";

// import { Container } from './styles';

export default function Random(props) {
  return (
    <div className="box">
      <h3>
        Random value between {props.min} and {props.max} =>
        {Math.floor(Math.random() * Math.floor(props.max))}
      </h3>
    </div>
  );
}
