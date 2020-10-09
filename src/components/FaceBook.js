import React from 'react';
import profiles from '/Users/andreialvarez/Desktop/Ironhack-Andrei/Module-3/lab-react-training/src/data/berlin.json';

class FaceBook extends React.Component {
  state = {
    profileColor: true
  }  


  render() {

    return [...profiles].map(function (item, index) {
      return (
        <div className="cardFaceBook box" key={index}>
          <img className="imgFaceBook" src={item.img} alt="student" />
          <div className="text">
            <p>
              <strong>First Name: </strong>
              {item.firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {item.lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {item.country}
            </p>
            <p>
              <strong>Type: </strong>
              {item.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      );
    });
  }
}
export default FaceBook;
