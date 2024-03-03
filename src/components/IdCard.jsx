import React from 'react';

function IdCard(props) {
  const { lastName, firstName, country, img, isStudent } = props.id;
  return (
    <div className="IdCard">
      <img src={img} alt="id-card-img" />
      <div className="info">
        <b>First Name: </b>{firstName} <br/>
        <b>Last Name: </b>{lastName} <br/>
        <b>Country: </b>{country} <br/>
        <b>Are they a student: </b>{isStudent ? "Yes" : "No"} <br/>
      </div>
    </div>
  );
}

export default IdCard;
