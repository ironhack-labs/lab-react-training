import React from 'react'
import './IdCard.css'

export default function IdCard(props) {
    let height = props.height.toString()/100 + 'm'
    let birth = props.birth.toDateString()

    return (
        <div className="id-card">
            <div className="id-pic">
                <img src={props.picture} />
            </div>
            <div className="text-info">
                <p><strong>First name</strong>: {props.firstName}</p>
                <p><strong>Last name</strong>: {props.lastName}</p>
                <p><strong>Gender</strong>: {props.gender}</p>
                <p><strong>Height</strong>: {height}</p>
                <p><strong>Birth</strong>:{birth}</p>
            </div>
        </div>
    )
}