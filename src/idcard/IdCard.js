import React from "react";

const IdCard = ( {lastName, firstName, gender, height, birth} ) => {
    return (
        <div className="idcard">
            <p>
                <strong>First name</strong>: {firstName}<br></br>
                <strong>Last name</strong>: {lastName}<br></br>
                <strong>Gender</strong>: {gender}<br></br>
                <strong>Height</strong>: {height / 100}m<br></br>
                <strong>Birth</strong>: {birth.toDateString()}
            </p>
        </div>
    );
};

export default IdCard;