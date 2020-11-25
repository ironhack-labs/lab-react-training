import React from 'react'

export default function DriverCard({
    name,
    // rating,
    img,
    car: {model, licensePlate}
  }) {
    return (
        <div className="driver-card" style={{display: "flex", backgroundColor: "#4761b3", color:"white", borderRadius:"7px", margin:"10px", alignItems:"center", justifyContent:"center"}}>
            <img src={img} alt={name} style={{borderRadius:"50%", height: "100px", width: "100px", padding:"20px"}} />
            <div style={{textAlign:"left", paddingLeft: "2px", lineHeight: "5px" }}>
                <h3>{name}</h3>
                {/* <div> {rating}</div> */}
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )
  }