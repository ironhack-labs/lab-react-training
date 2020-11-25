import profiles from '../data/berlin.json';
import React from 'react';

export default function Facebook() {
  return profiles.map((item, index) => (
    <div key={index} className="faceBook">
      <img src={item.img} alt={item.firstName} />
      <ul>
        <li>First Name: {item.firstName}</li>
        <li>Last Name: {item.lastName}</li>
        <li>Country: {item.country}</li>
        <li>Type: {item.isstudent ? `student` : `teacher`}</li>
      </ul>
    </div>
  ));
}
