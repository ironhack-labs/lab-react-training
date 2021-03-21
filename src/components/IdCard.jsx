import React from 'react'

export default function IdCard(props) {
    console.log(props)
    return (
        <>
        <div className="idCardContainer">
        <img src={props.picture}></img>
        <div className="idCardContainer">
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.age}</p>
            <p>{props.birth}</p>
        </div>
        </div>
        </>
    )
}
