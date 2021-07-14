import React, { Component } from 'react'
import './IdCard.css'

export default class IdCard extends Component {
    render() {
        return (
            <>
                <div className = "container">
                <div className= "info">
                
                <b>First Name:</b>
                <p>{this.props.firstName}</p>
                <b>Last Name:</b><p>{this.props.lastName}</p> 
                <b>Gender:</b><p>{this.props.gender}</p> 
                <b>Height:</b><p>{this.props.height}</p> 
                <b>Date of Birth:</b>
                <p>{this.props.birth.toString().slice(3,15)}</p> 
                <img src= {this.props.picture}/>

                </div>
                </div>
            </>
        )
    }
}
