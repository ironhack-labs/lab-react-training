import React from 'react';
import PropTypes from 'prop-types';

function IdCard({ lastName, firstName, gender, height, birth, pictureUrl }) {
  return (
    <>
      <div className="id-container border-container">
        <img src={pictureUrl} alt="User"></img>
        <div className="id-specs">
          <p><strong>First name: </strong> {firstName}</p>
          <p><strong>Last name: </strong> {lastName}</p>
          <p><strong>Gender: </strong> {gender}</p>
          <p><strong>Height: </strong> {height}</p>
          <p><strong>Birth: </strong> {birth}</p>
        </div>
      </div>
    </>
  );
}

IdCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.number,
  pictureUrl: PropTypes.string,
};

export default IdCard;
