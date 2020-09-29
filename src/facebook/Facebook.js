import React from 'react';
import './Facebook.css';

const Facebook = (props) => {
  return (
    <div>
      <div className={props.isStudent ? 'idcard-student' : 'idcard-teacher'}>
        <div>
          <img className="image-id" src={props.imgId} />
        </div>
        <br />
        <div className="id-items">
          <span type="text">
            <b>First Name: </b>
            {props.firstName}
          </span>
          <p type="text">
            <b>Last Name: </b>
            {props.lastName}
          </p>
          <p>
            <b>Country: </b>
            {props.country}
          </p>
          <p>
            <b>Type: </b>
            {props.isStudent ? <span>Student</span> : <span>Teacher</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
