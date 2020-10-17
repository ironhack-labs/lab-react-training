import React from 'react'

export default function IdCard(props) {
    return (
        <div>
           
            <div>
            <div>First name: {props.firstName}</div>
            <div>Last name: {props.lastName}</div>
            <div>Gender: {props.gender}</div>
            <div>Height: {props.height}</div>
            <div>Birth: {props.birth}</div>
            <div>
                <img src={props.picture} alt=""/>
            </div>
            </div>
            
        </div>
    )
}
