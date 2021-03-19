import React from 'react';
import '../assets/css/BoxItem.css'

const BoxItem = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className="BoxItem">
            <div className="Box">
                <img src= {picture}/>
            </div>
            <div className="Box">
                <h4>First name: {firstName}</h4>
                <h4>Last name: {lastName}</h4>
                <h4>Gender: {gender}</h4>
                <h4>Height: {height}</h4>
                <h4>Birth: {birth}</h4>
            </div>
        </div>
    )
}

export default BoxItem