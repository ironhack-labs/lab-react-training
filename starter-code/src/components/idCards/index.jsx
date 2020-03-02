import React, { Component } from 'react';


class IdCards extends Component {
  render() {

    const { lastName,
            firstName,
            gender,
            height,
            birth,
            picture} = this.props;

    return( 
      <div>
        <div className="picture">
        <img src= {picture} ></img>
        </div>
        <div>
          <strong>First name:</strong>{firstName}  <br></br>
          <strong>Last Name:</strong>{lastName}  <br></br>
          <strong>Gender:</strong>{gender} <br></br>
          <strong>Height:</strong>{height} <br></br>
          <strong>Birth</strong>{birth.toLocaleString()}
        </div>
        
      </div>
    );
  }
};


export default IdCards;