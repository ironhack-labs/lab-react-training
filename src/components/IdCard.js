import React, { Component } from 'react';


class IdCard extends Component {
  state = {
  }
  render() {
    const { picture, lastName, firstName, gender, height, birth } = this.props;
    return (
      <div>
        <div className="IdCard-box">
        <img className="profile-img" src={ picture } alt="Profile pic"/> 
          <div>
            <p><strong>Last name:</strong> { lastName }</p>
            <p><strong>First ame:</strong> { firstName }</p>
            <p><strong>Gender:</strong> { gender }</p>
            <p><strong>Height:</strong> { height }</p>
            <p><strong>Birth:</strong> { birth.toDateString() }</p>
          </div>
        </div>
      </div>
    )
  }
}

export default IdCard;