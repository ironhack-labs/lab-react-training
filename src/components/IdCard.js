import React from 'react';

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className="IdCard border">
            <img src={picture} alt=""/>
            <div className="card-content">
                <span><strong>First name</strong>: {firstName}</span>
                <span><strong>Last name</strong>: {lastName}</span>
                <span><strong>Gender</strong>: {gender}</span>
                <span><strong>Height</strong>: {height}</span>
                <span><strong>Birth</strong>: {birth.toLocaleDateString()}</span>
            </div>
        </div>
    );
}

export default IdCard;