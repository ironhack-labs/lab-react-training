import React, { Component } from 'react';

class ACard extends Component {
  render() { 
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (  
      <div className="card sm-2" >
         <img className="card-img"  src={picture} alt="face" style={{ width: '16rem' }} />
        
        <div className="card-body">
          <p>Last name: {lastName}</p>
          <p>First name: {firstName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {JSON.stringify(height)}</p>
          <p>Birth: {JSON.stringify(birth)}</p>
        </div>
      </div>
    );
  }
}
export default ACard