import React from 'react';

function toString(date) {
    return date.toDateString();
}

const IdCard = (props) => {
  return (
    <div
      style={{
        border: '1px solid black',
        margin: '20px',
        display: 'flex',
      }}
    >
      <div className="idcardpicture">
        <img src={props.picture} alt={props.firstName} />
      </div>
      <div
        className="idcardinfo"
        style={{
          fontSize: '0.5em',
          padding: '5px',
          textAlign :'left'
        }}
      >
        <h1>First Name : {props.firstName}</h1>
        <h1>Last Name : {props.lastName}</h1>
        <h1>Gender: {props.gender}</h1>
        <h1>Height: {props.height}</h1>
        <h1>Date: toString({props.date})</h1>
      </div>
    </div>
  );
};

export default IdCard;

// Height and birth date