import React from 'react';

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className="IdCard border">
            <img src={picture} alt=""/>
            <div className="card-content">
                <strong>First name</strong>: {firstName}
                <br />
                <strong>Last name</strong>: {lastName}
                <br />
                <strong>Gender</strong>: {gender}
                <br />
                <strong>Height</strong>: {height}m
                <br />
                <strong>Birth</strong>: {birth.toLocaleDateString()}
                {/* <strong>Birth</strong>: {birth.getDate()}/{birth.getMonth()}/{birth.getFullYear()} */}
            </div>
        </div>
    );
}

export default IdCard;