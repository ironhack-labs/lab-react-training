import React from 'react';
import PropTypes from 'prop-types';



// PROPS IS AN OBJECTS
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    // eslint-disable-next-line react/prop-types
let options = {weekday: 'short', year: 'numeric', month: 'long', day:'numeric'}
    return (
        <>
            <div>
                <img src={picture} alt="profile" />
            </div>
            <div>
                <p><b>First name:</b>{firstName}</p>
                <p><b>Last name:</b> {lastName}</p>
                <p><b>Gender:</b>{gender}</p>
                <p><b>Height:</b>{height}</p>
                <p><b>Birth:</b>{birth.toLocaleDateString('en-US', options)}</p>
            </div>
        </>
    )
}


//this is very good practise - senior level
//propTypes lowercase and then uppercase
IdCard.propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.oneOf(['male', 'female']),
    heigth: PropTypes.number,
    birth: PropTypes.instanceOf(Date),
    picture: PropTypes.string
}


export default IdCard;