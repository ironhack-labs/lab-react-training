import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className='idcard-box'>
        <img className='idcard-img' src={picture} alt="" />
        <div>
          <p>First name:{firstName}</p>
          <p>Last name:{lastName}</p>
          <p>Gender:{gender}</p>
          <p>Height:{height}</p>
          <p>Birth:{birth.toDateString()}</p>
        </div>
      </div>
    );
  }
}

export default IdCard;
