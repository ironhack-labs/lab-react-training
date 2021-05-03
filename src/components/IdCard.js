import React from 'react';

class IdCard extends React.Component {
  render() {
    const { firstName, lastName, gender, height, birth, picture } = this.props;
    return (
      <div className='card'>
      <div className='picture-card'>
        <img src={picture} alt={picture} />
      </div>
      <div className='info-card'>
      <ul className='list'>
        <li><b>First Name: </b>{firstName}</li>
        <li><b>Last Name: </b>{lastName}</li>
        <li><b>Gender: </b>{gender}</li>
        <li><b>Height: </b>{height/100}m</li>
        <li><b>Birth: </b>{birth.toDateString()}</li>
      </ul>
      </div>
      </div>
    );
  }
}

export default IdCard;
