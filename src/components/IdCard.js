import React from 'react';

class IdCard extends React.Component {
  render() {
    const { firstName, lastName, gender, height, birth, picture } = this.props;
    return (
      <div className='card'>
        <img src={picture} alt={picture} />
        <p>
          <b>First Name: </b>
          {firstName}
        </p>

        <p>
          <b>Last Name: </b>
          {lastName}
        </p>

        <p>
          <b>Gender: </b>
          {gender}
        </p>

        <p>
          <b>Height: </b>
          {height/100}m
        </p>

        <p>
          <b>Birth: </b>
          {birth.toDateString()}
        </p>
      </div>
    );
  }
}

export default IdCard;
