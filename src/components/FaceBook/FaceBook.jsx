import React from 'react';

import './FaceBook.css';
import profiles from '../../data/berlin.json';

class FaceBook extends React.Component {
  render() {
    console.log(profiles);
    
    return (
      
      [...profiles].map(function (ele, i) {
        return (
          
          <div className="cardImg">
            <img src={ele.img} alt="" />
            <div className="text">
              <p>
                <strong>First Name: </strong>
                {ele.firstName}
              </p>
              <p>
                <strong>Last Name: </strong>
                {ele.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {ele.country}
              </p>
              <p>
                <strong>Type: </strong>
                {ele.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })
      
    )
    
  }
}
export default FaceBook;
