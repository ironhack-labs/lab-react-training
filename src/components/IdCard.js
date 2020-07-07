import React from 'react';
import './Container.css'

export default function IdCard (props){
    return(
        <div className="container">
            <img src={props.picture} alt={props.firstName}/>
            <div>
                <h3>First Name: <span>{props.firstName}</span></h3>
                <h3>Last Name: <span>{props.lastName}</span></h3>
                <h3>Gender: <span>{props.gender}</span></h3>
                <h3>Height: <span>{props.height}</span></h3>
                <h3>Birth: <span>{props.birth}</span></h3>
            </div>
        </div>
    )
}