import React from 'react'

export default function IdCard(props) {
    return (
        <div className="idCard">
            <p>{props.lastName}</p>
            <p>{props.firstName}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.birth.toLocaleString()}</p>
            <img src={props.picture}/>
        </div>
    )
}
