import React, { Fragment } from 'react';

export default function Idcard(props) {
  return (
    <Fragment>
      <div>
        <img
          src={props.picture}
          alt="`${props.firstName} ${props.lastName}`"
        ></img>
        <p>First name:{props.firstName}</p>
        <p>Last name:{props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Birth: {props.birth.toDateString()}</p>
      </div>
    </Fragment>
  );
}
