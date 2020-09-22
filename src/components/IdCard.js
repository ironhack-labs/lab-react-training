import React from 'react'

export default function idCard(props) {
    return (
        <div>
             <div>
                <img src={props.picture} alt="avatar"></img>
                <p>Last name: {props.lastName}</p>
                <p>First name: {props.firstName}</p>
                <p>Gender:{props.Gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth: {props.birth.toDateString()}</p>
            </div>
        </div>
    )
}
