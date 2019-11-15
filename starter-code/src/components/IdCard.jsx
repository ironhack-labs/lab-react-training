import React from "react";

const IdCard = ({ lastName, firstName, country, img, isStudent }) => (
  <div className="cards">
    <ul>
      <p>
        <strong>Name: </strong> {firstName}
      </p>
      <p>
        <strong>Last name:</strong> {lastName}
      </p>
      <p>
        <strong>From:</strong> {country}
      </p>
      <span>
        <strong>Student:</strong>
        {isStudent ? <span>Yes</span> : <span>No</span>}
      </span>
      <br></br>
      <img src={img} alt="head shots!" />
    </ul>
  </div>
);

export default IdCard;
