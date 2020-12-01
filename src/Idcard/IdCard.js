import React from 'react';
import PropTypes from 'prop-types';
import './IdCard.css';

const IdCard = (props) => {
  console.log(props.birth);
  return (
    <div class="id-card">
      <div>
        <img src={props.picture}></img>
      </div>
      <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.getFullYear()}</p>
      </div>
    </div>
  );
};

IdCard.propTypes = {};

export default IdCard;
