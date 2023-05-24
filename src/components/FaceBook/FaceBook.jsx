import React from 'react';
import './FaceBook.css'
import profiles from './../../data/berlin.json';

const Facebook = () => {
    return (
        <section>
            <h1>Listado de bebidas</h1>
            {profiles.map(({ firstName, lastName, country, img, isStudent }) => (
                <div key={`${firstName}-${lastName}`}>
                    <img className="facebookImg" src={img} alt="" />
                    <p><strong>Last Name:</strong> {lastName}</p>
                    <p><strong>First Name:</strong> {firstName}</p>
                    <p><strong>Country:</strong> {country}</p>
                    <p><strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            ))}
        </section>
    );
};

export default Facebook;