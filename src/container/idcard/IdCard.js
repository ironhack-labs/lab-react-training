import React from "react";
import "./IdCard.css";

const IdCard = ( {lastName, firstName, gender, height, birth, picture} ) => {
    return (
        <div className="IdCard">
            <img src={picture} alt="Id"/>
            <div>
                <strong>First name</strong>: {firstName}<br />
                <strong>Last name</strong>: {lastName}<br />
                <strong>Gender</strong>: {gender}<br />
                <strong>Height</strong>: {height / 100}m<br />
                <strong>Birth</strong>: {birth.toDateString()}
            </div>
        </div>
    );
};

export default IdCard;