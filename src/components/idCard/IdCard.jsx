import React from 'react';
import './IdCard.css';

export default class IdCard extends React.Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="IdCard">
        <div className="IdCard-img">
          <img src={picture} alt="{picture}" />
        </div>
        <div className="IdCard-text">
          <h3>
            First name: <span>{firstName}</span>
          </h3>
          <h3>
            Last name: <span>{lastName}</span>
          </h3>
          <h3>
            Gender: <span>{gender}</span>
          </h3>
          <h3>
            Height: <span>{height}</span>
          </h3>
          <h3>
          Birth: <span>{birth.toDateString()}</span>
        </h3>
        </div>
      </div>
    );
  }
}