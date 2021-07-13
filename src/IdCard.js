import React from "react";
import PropTypes from "prop-types";

function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    let options = {weekday: "short", month: "short", day: "numeric", year: "numeric" }
    return (
      <div className="Cards">
      <div>
          <img src={picture} alt="portrait"/>
      </div>
        <div className="Profile">
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p> <strong>Height:</strong> {height}m</p>
        <p><strong>Birth:</strong> {birth.toLocaleDateString("en-US", options)}</p>            
        </div>        
      </div>
    );

}

IdCard.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.number,
    birth: PropTypes.instanceOf(Date),
    picture: PropTypes.string
}

export default IdCard;