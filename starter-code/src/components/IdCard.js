import React, { Component } from 'react'

const IdCard = props => {
    return (
        <div style={Cardcontainer}>
            <img src={props.picture} alt="#" style={img}/>
            <div style={info}>
                <p><b>First name:</b> {props.firstName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height}m</p>
                <p><b>Bith:</b> {props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

const Cardcontainer = {
    fontSize: '20px',
    display: 'flex',
    padding: '10px',
    margin: '10px',
    border:'2px solid black'
}

const img = {
    width: '180px',
    height: '180px'
}

const info = {
    marginLeft: '10px'
}


export default IdCard