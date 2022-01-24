import React from 'react';
import './FaceBook.css';
import data from '../data/berlin.json';
const FaceBook = () => {
  return (
    <div className="FaceBook">
      {data.map((entry, idx) => {
        return (
          <div key={idx} className="card">
            <img
              src={entry.img}
              alt={`${entry.firstName} ${entry.lastName}`}
            />
            <div>
              <p><span>First Name:</span> {entry.firstName} </p>
              <p><span>Last Name:</span> {entry.lastName} </p>
              <p><span>Country:</span> {entry.country} </p>
              {entry.isStudent ? <p><span>Type: </span>Student</p> : <p><span>Type:</span> Teacher</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
