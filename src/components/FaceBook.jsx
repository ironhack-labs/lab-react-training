import React from 'react';
import profiles from './../data/berlin.json';

console.log(profiles);

const FaceBook = () => {
  return (
    <div className="my-2 d-flex justify-content-center align-items-center">
      <div className="w-50">
        {profiles.map((profile) => (
          <div
            key={profile.lastName}
            className="row border border-secondary mb-3"
            style={{ height: '150px' }}
          >
            <div className="col-md-2">
              <img
                className="my-3"
                src={profile.img}
                alt={profile.firstName}
                style={{ width: '100px' }}
              />
            </div>
            <div className="col-md-10 my-3">
              <div>
                <p>
                  <strong>First Name:</strong> {profile.firstName}
                  <br />
                  <strong>Last Name:</strong> {profile.lastName}
                  <br />
                  <strong>Country:</strong> {profile.country}
                  <br />
                  <strong>Type:</strong>
                  {profile.isStudent === true ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
