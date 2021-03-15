import React from 'react'

export default function IdCard(props) {
    return (
        <div>
           <b>Last Name</b> {props.lastName} <br/>
           <b>First Name</b> {props.firstName} <br/>
           <b>Gender</b> {props.gender} <br/>
           <b>Height</b> {props.height} <br/>
            <img src={props.picture} alt=""/><br/>
           <b>Birth</b> {new Date(props.birth).toDateString()} <br/>
            
           
        </div>
    )
}
