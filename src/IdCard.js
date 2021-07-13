import React from "react"
import PropTypes from "prop-types";

function IdCard ({lastName, firstName, gender, height, birth, picture}){
    return(
    <div className="card-box" style ={{display: "inline-flex"}}>
        <img src={picture} width="150px" height="165px" alt=""></img>
        <div >
            <p><strong>First name: </strong> {firstName}</p>
            <p><strong>Last name: </strong> {lastName}</p>
            <p><strong>Gender: </strong> {gender}</p>
            <p><strong>Height: </strong> {height}</p>
            <p><strong>Birth: </strong>{birth.toLocaleDateString()}</p>
        </div>
    </div>
    )
}


IdCard.propTypes = {
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    gender: PropTypes.oneOf(["male", "female"]),
    height: PropTypes.string,
    birth: PropTypes.instanceOf(Date),
    picture: PropTypes.string,
}

export default IdCard