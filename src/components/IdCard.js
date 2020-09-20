import React from 'react';

function IdCard(props) {
  return (
    <div className="IdCard box">
      <span>
        <img src={props.picture} alt={props.firstName} />
      </span>
      <div className="details">
        <p>
          <strong> First name:</strong> {props.firstName}
        </p>
        <p>
          <strong> Last name:</strong> {props.lastName}
        </p>
        <p>
          <strong> Gender:</strong> {props.gender}
        </p>
        <p>
          <strong> Height</strong> {props.height}m
        </p>
        <p>
          <strong> Birth:</strong>{' '}
          {new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
            props.birth
          )}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
