import { useState } from 'react';

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;
    return (
        <div className="IdCard">
            <img src={picture} alt="IdCard Picture" />
            <p>First name:{firstName}</p>
            <p>Last name: {lastName}</p>
            {gender && <p>Gender: {gender}</p>}
            {height && <p>Height: {height}</p>}
            {birth && <p>Birth: {birth}</p>}
        </div>
    )
}

export default IdCard;
