import React from 'react';

const IdCard = (props) => {
    return (
        <div className="id-container">
            <img src={props.picture}/>
            <div>
            <p><b>First Name: </b>{props.firstName}</p>
            <p><b>Last Name: </b>{props.lastName}</p>
            <p><b>Gender: </b>{props.gender}</p>
            <p><b>Height: </b>{props.height} cm</p>
            <p><b>Birthday: </b>{props.birth}</p>
            </div>
        </div>
    )
};

export default IdCard; 