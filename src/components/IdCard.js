import React from "react";
import './IdCardStyles.css'

const IdCard = (props) => {
    const {lastName, firstName, gender, height, birth, picture} = props

return(
    <div className="IdCard">
    <div className="ProfilePic">
        <img src = {picture} alt="profile-icon" />
    </div>
    <div classNmae="ProfileInfo">
    <p>LastName: {lastName}</p>
    <p>FirstName: {firstName}</p>
    <p>Gender: {gender}</p>
    <p>Height: {height}</p>
    <p>Birth: {birth.toDateString()}</p>
    </div>
    </div>
)
}

export default IdCard;


