import React from 'react'

export default function IdCard(props) {
    console.log(props)
    return (
        <div>
            <div>
                <img src={props.picture}></img>
            </div>
            <div>
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {(props.height)/100} m</p>
                <p>Birth: {props.birth.toDateString()}</p>
            </div>
    </div>
    )
}
