import React from 'react';

function IdCard(props) {
  const { lastName, firstName, country, img, isStudent } = props.id;
  return (
    <div className="id-card">
      <img src={img} className="id-card-img" alt="id-card-img" />
      <div className="info">
        First Name: {firstName} <br/>
        Last Name: {lastName} <br/>
        Country: {country} <br/>
        Are they a student: {isStudent ? "Yes" : "No"} <br/>
      </div>
    </div>
  );
}

export default IdCard;

/*
{"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},
*/
