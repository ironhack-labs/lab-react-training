import React from 'react';

const App = (props) => {
  const heigthFormatted = props.height / 100;
  const dateFormatted = props.birth.toDateString();
  return (
    <div className="IdCard box">
      <img src={props.picture} alt={props.lastName} />
      <div className="right">
        <strong>First name</strong>: {props.firstName} <br />
        <strong>Last name</strong>: {props.lastName}
        <br />
        <strong>Gender</strong>: {props.gender} <br />
        <strong>Height</strong>: {heigthFormatted}m
        <br />
        <strong>Birth</strong>: {dateFormatted}
        <br />
      </div>
    </div>
  );
};

export default App;
