import React from 'react'

export default function IdCard(props) {
    return (
         <div>
                <img src={props.picture} alt=""/>
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p> Height: {props.height}</p>
                <p> Birthday: {props.birth}</p>
        </div>
    )
}
