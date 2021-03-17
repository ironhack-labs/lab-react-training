import React from 'react'
import '../assets/css/IdCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className="IdCard">
            <img src={ picture }></img>
            <div className="Data">
                <p><strong>First name</strong>: { firstName }</p>
                <p><strong>Last name</strong>: { lastName }</p>
                <p><strong>Gender</strong>: { gender }</p>
                <p><strong>Height</strong>: { convertHeight(height) }</p>
                <p><strong>Birth</strong>: { convertDate(birth) }</p>
            </div>
        </div>
    )
}

function convertDate(date) {
    let birth = new Date(date);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return birth.toLocaleDateString('en-US', options);
}

function convertHeight(date) {
    let height = date
    return `${height[0]},${height[1]}${height[2]}m`
}

export default IdCard