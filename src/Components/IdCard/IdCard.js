import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="border border-dark m-2 d-flex p-1">
      <img src={props.picture ? props.picture : props.img} />
      <ul className="list-inline info-list">
        <li>
          <strong>First name:</strong> {props.firstName}
        </li>
        <li>
          <strong>Last name:</strong> {props.lastName}
        </li>
        {props.country ? (
          <li>
            <strong>Country:</strong> {props.country}
          </li>
        ) : (
          ''
        )}
        {props.isStudent ? (
          <li>
            <strong>Type:</strong> {props.isStudent ? 'Student' : 'Teacher'}
          </li>
        ) : props.isStudent === false ? (
          <li>
            <strong>Type:</strong> {'Teacher'}
          </li>
        ) : (
          ''
        )}
        {props.gender ? (
          <li>
            <strong>Gender:</strong> {props.gender}
          </li>
        ) : (
          ''
        )}
        {props.heigth ? (
          <li>
            <strong>Height:</strong> {props.heigth}
          </li>
        ) : (
          ''
        )}
        {props.birth ? (
          <li>
            <strong>Birth:</strong> {props.birth.toLocaleString()}
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

export default IdCard;