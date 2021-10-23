// rfce
import React from 'react'

function IdCard(props) {
    console.log(props);
    return (
        <div>
            <img src={props.picture}/>
            <p> First name: {props.firstName} </p>
            <p> Last name: {props.lastName} </p>
            <p> Gender: {props.gender} </p>
            <p> Height: {props.height} </p>
            <p> Birth: {props.birth.toDateString()} </p>
        </div>
    )
}

export default IdCard
