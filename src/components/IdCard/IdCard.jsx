import React from 'react';
import classes from './IdCard.module.css';

const IdCard = (props) => {
  const formatDate = (date) => {
    return date.getMonth() + 1 + ' ' + date.getDate() + ' ' + date.getFullYear();
  };
  console.log(classes);
  return (
    <div className={classes.container}>
      <img src={props.picture} alt="profile"></img>
      <div className="info-container">
        <p>
          <strong>First Name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}
        </p>
        <p>
          <strong>Birth:</strong> {formatDate(props.birth)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
