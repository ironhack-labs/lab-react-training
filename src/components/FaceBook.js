import React from 'react';
import './FaceBook.css';
import profiles from '../data/berlin.json';

function FaceBook() {
  return (
    <div>
      {profiles.map((elem, index) => {
        return (
          <div className="profile">
            <img src={elem.img} alt="profile" />
            <div className='info'>
              <p>
                <strong>Firstname: </strong>
                {elem.firstName}
              </p>
              <p>
                <strong>Lastname: </strong>
                {elem.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {elem.country}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
