import React from "react";

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div>
            <img src={picture} alt={firstName + ' ' + lastName} />
            <p>Name: {lastName}</p>
            <p>Surname: {firstName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toLocaleDateString()}</p>
        </div>
    )
};

export default IdCard;