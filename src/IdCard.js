import React from 'react';
import PropTypes from 'prop-types';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <strong>First name</strong><div>{firstName}</div>
      <strong>last name</strong><div>{lastName}</div>
      <strong>gender</strong><div>{gender}</div>
      <strong>height</strong><div>{height}</div>
      <strong>birth</strong><div>{birth.toLocaleDateString()}</div>
      <div className="cardimg">
        <img src={picture} alt="img"></img>
      </div>
    </div>
  );
}

IdCard.propTypes = {
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.number,
  birth: PropTypes.instanceOf(Date),
  height: PropTypes.number,
  picture: PropTypes.string,
};

export default IdCard;
