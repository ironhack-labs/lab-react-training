import React from 'react'
import "./idCard.css";

const Id = ({ id }) => {
    return (
        <article key ={id.firstName} className="card-container">
            <img src={id.picture} className="id-image"/>
            <div className="id-p-tag">
                <p><strong>First Name:</strong> {id.firstName}</p>
                <p><strong>Last Name:</strong> {id.lastName}</p>
                <p><strong>Gender:</strong> {id.gender}</p>
                <p><strong>Height:</strong> {id.height}</p>
                <p><strong>Birth:</strong> {id.birth}</p>
            </div>
        </article>
    );
};

export default Id