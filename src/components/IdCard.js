import React from 'react'

export default function IdCard({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
  }) {
    return (
      <div className="id-card" style={{display: "flex", border: "2px solid black", margin: "2px"}}>
        <img src={picture} alt={firstName} style={{width: "150px", height: "150px", padding:"3px" }} />
        <div style={{textAlign:"left", paddingLeft: "2px", lineHeight: "5px" }}>
          <p><b>First name:</b> {firstName}</p>
          <p><b>Last name:</b> {lastName}</p>
          <p><b>Gender:</b> {gender}</p>
          <p><b>Height:</b> {height}</p>
          <p><b>Birth:</b> {birth.toDateString()}</p>
        </div>
      </div>
    )
  }