import React from 'react'

export default function IdCard(props) {
    return (
        <div className="idCards">
            <img src={props.picture}/>
           <p>Last Name: {props.lastName}</p>
           <p>First Name: {props.firstName}</p>
           <p>Gender: {props.gender}</p>
           <p>Height: {props.height}</p>
           <p>{props.birth.toLocaleString()}</p>  
        </div>
    )
}
