import React from 'react'

export default function IdCard(props) {
    return (
        <div style={{display:"flex", border:"solid black 2px", margin:"10px", padding:"10px"}}>
            <img src={props.picture} style={{ width: '200px' }} alt="user"/>
            
            <div style={{textAlign: "left", marginLeft: "10px"}}>
                <p><span style={{fontWeight: "bold"}}>First name: </span>{props.firstName}</p>
                <p><span style={{fontWeight: "bold"}}>Last name: </span> {props.lastName}</p>
                <p><span style={{fontWeight: "bold"}}>Gender name: </span>{props.gender}</p>
                <p><span style={{fontWeight: "bold"}}>Height name: </span>{props.height}</p>
                <p><span style={{fontWeight: "bold"}}>Birth name: </span>{props.birth.toLocaleDateString()}</p>
            </div>
        </div>
    )
}