import React from 'react';
import '../assets/css/IdCard.css'


const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="card">
            <img className="card-img" src={picture} alt="alt" />
            <div className="card-data">
                <p className="card-info"><strong>Firtsname:</strong> {firstName}</p>
                <p className="card-info"><strong>Lastname:</strong> {lastName}</p>
                <p className="card-info"><strong>Gender:</strong>  {gender}</p>
                <p className="card-info"><strong>Height:</strong> {height}</p>
                <p className="card-info"><strong>Birth:</strong> {birth}</p>
            </div>
        </div>
    )
}



export default IdCard