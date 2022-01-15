import React from 'react';
import classes from './IdCard.module.css';

const IdCard = (props) => {
  return (
    <div className={classes.card}>
      <img
        src={props.picture}
        alt={props.lastName}
        className={classes.profileImg}
      />
      <div className={classes.personalDetails}>
        <p>First Name: {props.firstName}</p>
        <p>First Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Birth: {props.birth}</p>
        <p>Height: {props.height}</p>
      </div>
    </div>
  );
};

export default IdCard;
