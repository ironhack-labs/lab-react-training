import React from 'react';

export default function IdCard(props) {
  return (
    <div className='IdCard'>
      <img src={props.picture} alt="profile pic" />
      <div>
        <h1>
          name : {props.firstName} {props.lastName}
        </h1>
        <h1>gender: {props.gender}</h1>
        <h1>height : {props.height}</h1>
        <h1>birth : {props.birth}</h1>
      </div>
    </div>
  );
}
