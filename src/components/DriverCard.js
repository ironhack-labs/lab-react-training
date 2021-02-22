import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (
        <div style={{display:"flex", gap:"20px", textAlign:"left", alignItems:"center", backgroundColor:"#455eb5", margin:"15px", color:"white", borderRadius:"15px", paddingLeft:"200px", width:"550px"}}>
            <div>
                <img src={props.img} style={{width:"100px", height:"100px", borderRadius:"50px"}}/>
            </div>
            <div>
                <p style={{fontWeight:"bold", fontSize:"20px"}}>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
