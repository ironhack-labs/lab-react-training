import React from 'react';
// import logo from '../logo.svg';

const IdCard = (props) => {
  const dob = props.birth
    .toString()
    .split(' ')
    .slice(0, 4)
    .join()
    .replace(/,/g, ' ');

  const hgt = props.height / 100 + 'm';
  return (
    <div className="id-card">
      <div>
        <img src={props.picture} />
      </div>
      <div className="content-card">
        <p>
          <span> First name:</span> {props.firstName}
        </p>
        <p>
          <span> Last name:</span> {props.lastName}
        </p>
        <p>
          <span> Gender:</span> {props.gender}
        </p>
        <p>
          <span> Height:</span> {hgt}
        </p>
        <p>
          <span> Birth:</span> {dob}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
