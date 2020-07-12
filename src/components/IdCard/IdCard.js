import React from 'react'
import "../IdCard.css"

function IdCard (props) {
    return (
        <div className="card">
        <div>
        <img className="img" src={props.picture} alt=""/>
        </div>
        <div>
        <p><b> First Name :</b> {props.firstName}</p> 
        <p><b> Last Name :</b> {props.lastName}</p>
        <p><b> Gender :</b> {props.gender}</p>
        <p><b> Height :</b> {props.height}</p> 
        <p><b> Birth :</b>  {props.birth}</p> 
        </div>
            
        </div>
    )
}

export default  IdCard