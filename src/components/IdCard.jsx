import React from 'react'

function IdCard(props) {
    console.log(props)
    return (
        <div className="IdCard">
            <div>{props.firstName} {props.lastName}</div>
            <div>{props.gender}</div>
            <div>{props.height}</div>
            <div>{props.birth.toString()}</div>
            <img src={props.picture} alt="picture"></img>
        </div>
    )
}

export default IdCard
