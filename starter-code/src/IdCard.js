import React from 'react'

const IdCard = (props) => {
    return (
        <div className="card">
            <img src={props.picture} alt=""></img>
            <h3> First Name: {props.firstName}</h3>
            <h3> Last Name: {props.lastName}</h3>
            <h3> Gender: {props.gender}</h3>
            <h3> Height: {props.height} cm</h3>
            <h3> Birth: {props.birth}</h3>
            
        </div>
    )
    
}

export default IdCard