import React from 'react'
import './IdCard.css'

export default function IdCard(props) {
    return (
        <div className='card-container'>
            <div className="picture-container">
                <img src={props.picture} alt=""/>
            </div>
            <div className="info-container">
                <span>First name:{props.firstName}</span>
                <span>Last name:{props.lastName}</span>
                <span>Gender:{props.gender}</span>
                <span>Height:{props.height}</span>
                <span>Birth:{props.birth}</span>
            </div>
        </div>
    )
}
