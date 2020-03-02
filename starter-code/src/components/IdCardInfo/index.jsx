import React, { Component } from 'react';
import './style.scss';

class IdCardInfo extends Component {
  render() {
    const { photo, firstName, lastName, gender, height, birth } = this.props;
    
    return (
      <div className="IdCard">

        <img src={photo} alt="Id Photo"/>

        <div className="IdDetails">
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Heigth:</strong> {height}</p>
          <p><strong>birth:</strong> {birth.toDateString()}</p>
        
        </div>
      </div>
    );
  }
}
      
    
export default IdCardInfo;