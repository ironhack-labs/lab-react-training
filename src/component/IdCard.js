import React from 'react';

/*
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
{props.birth}


    <div class="IdCard box">
      <img src={props.picture} alt={props.lastName} />
      <div class="right">
        <strong>First name</strong>: {props.firstName} <br />
        <strong>Last name</strong>: {props.lastName}
        <br />
        <strong>Gender</strong>: {props.gender} <br />
        <strong>Height</strong>: {heigthFormatted}m
        <br />
        <strong>Birth</strong>: <br />
      </div>
    </div>

*/

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
