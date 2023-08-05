import React from "react";
import './index.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    const date = new Date(birth).toDateString()
    return(
        <div className="idcard">
            <div className="picture">
                <img src={picture} alt=""></img>
            </div>
            <div className="info">
                <p className="info-info"> <b>First name</b>: {lastName}</p>
                <p className="info-info"><b>Last name</b>: {firstName}</p>
                <p className="info-info"><b>Gender</b>: {gender}</p>
                <p className="info-info"><b>Height</b>: {height}</p>
                <p className="info-info"><b>Birth</b>: {date}</p>
            </div>
        </div>
    )
}

export default IdCard;