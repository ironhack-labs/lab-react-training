import React from 'react'
import PropTypes from 'prop-types';
import './styles/id.css'

export const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {


  return (
    <>
      <h1>ID CARD</h1>
      <div className="id">
        <img src={picture} alt="Image Profile" />

        <div className="text">
            <p> <strong>First Name:</strong> {firstName}</p>
            <p> <strong>Last Name: </strong> {lastName}</p>
            <p> <strong>Gender:</strong> {gender}</p>
            <p> <strong>Height:</strong> {height}</p>
            <p> <strong>Birth Day: </strong> {birth}</p>
        </div>
      </div>
    </>
  );
}

IdCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    birth: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired 
}
