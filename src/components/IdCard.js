import React from 'react'

export default function IdCard(props) {
    const height = JSON.stringify(props.height).slice(0,1) + 'm' + JSON.stringify(props.height).slice(1)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[props.birth.getDay()]
    const date = props.birth.getDate()
    const month = monthNames[props.birth.getMonth()]
    const year = props.birth.getFullYear()
    return (
        <div style={{display:"flex", border:"solid black 2px", margin:"10px", padding:"10px"}}>
            <img src={props.picture} style={{ width: '200px' }} alt="user"/>
            <div style={{textAlign: "left", marginLeft: "10px"}}>
                <p><span style={{fontWeight: "bold"}}>First name: </span>{props.firstName}</p>
                <p><span style={{fontWeight: "bold"}}>Last name: </span>{props.lastName}</p>
                <p><span style={{fontWeight: "bold"}}>Gender: </span>{props.gender}</p>
                <p><span style={{fontWeight: "bold"}}>height: </span>{height}</p>
                <p><span style={{fontWeight: "bold"}}>Birth: </span>{day} {month} {date} {year}</p>
            </div>
        </div>
    )
}

