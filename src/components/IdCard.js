import React from 'react';

const IdCard = (props) => {
  return (
    <div id="IdCard">
      <img src={props.picture}></img>
      <div>
        <b>FirstName: </b> {props.firstName}{' '}
      </div>
      <div>
        <b>LastName: </b> {props.lastName}{' '}
      </div>
      <div>
        <b>Gender: </b> {props.gender}{' '}
      </div>
      <div>
        <b>Height: </b> {props.height}{' '}
      </div>
      <div>
        <b>Birth: </b> {props.birth}{' '}
      </div>
    </div>
  );
};

export default IdCard;
