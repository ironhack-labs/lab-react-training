import React from 'react';

function IdCard(props) {
  console.log('this is props', props);

  return (
    <div className="id-card">
      <img src={props.picture} />
      <div className="id-details">
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
