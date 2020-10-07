import React from 'react';
import profiles from '../data/berlin.json';

const Facebook = (props) => {
  return (
    <div>
      {profiles.map((student, index) => (
        <div className="profile" key={index}>
          <img src={student.img} alt="" />
          <div>
            <div>First name: {student.firstName}</div>
            <div>Last name:{student.lastName}</div>
            <div>Country:{student.country}</div>
            <div>Type: {student.isStudent ? 'Student' : 'Teacher'}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facebook;
