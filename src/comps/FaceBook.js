// imports
import React from 'react';
import profiles from '../data/berlin.json';

//components
class FaceBook extends React.Component {
  render() {
    const studentList = profiles.map((student, index) => {
      return (
        <div key={index} className="card-facebook">
          <img src={student.img} alt={student.firstName} />
          <div>
            <p>
              First Name: <span>{student.firstName}</span>
            </p>
            <p>
              Last Name: <span>{student.lastName}</span>
            </p>
            <p>
              Country: <span>{student.country}</span>
            </p>
            <p>
              Type: <span>{student.isStudent ? 'Student' : 'Teacher'}</span>
            </p>
          </div>
        </div>
      );
    });
    return <div>{studentList}</div>;
  }
}

// exports
export default FaceBook;
