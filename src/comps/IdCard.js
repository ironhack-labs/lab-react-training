// imports
import React from 'react';

//components
class IdCard extends React.Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="card">
        <img src={picture} alt={firstName} />
        <div>
          <p>
            First Name: <span>{firstName}</span>
          </p>
          <p>
            Last Name: <span>{lastName}</span>
          </p>
          <p>
            Gender: <span>{gender}</span>
          </p>
          <p>
            Height: <span>{height / 100}m</span>
          </p>
          <p>
            Birth: <span>{birth.toDateString()}</span>
          </p>
        </div>
      </div>
    );
  }
}

// exports
export default IdCard;
