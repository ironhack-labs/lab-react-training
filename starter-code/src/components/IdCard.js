import React from 'react'

function IdCard(props) {
    return (
        <div className="card">
        <div className="card-picture"> 
            <img src= {props.picture}/>    
        </div>
            <p>firstName: {props.firstName} </p>
            <p>lastName: {props.lastName} </p>
            <p>gender: {props.gender} </p>
            <p>height: {props.height}  </p>
            <p><strong>birth:</strong> {props.birth.toDateString()}</p>
        </div>
    )
}

export default IdCard