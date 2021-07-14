import React, { Component } from 'react'
import "../css/idCard.css"
export default class IdCard extends Component {
    render() {
        return (
            <>
            <div class = "idCard">
                <img src={this.props.picture} />
            <div class = "parafun">
            <p>
                <strong>Name:</strong> {this.props.firstName}
            </p>
            <p>
                <strong>Last Name:</strong> {this.props.lastName}
            </p>
            <p>
                <strong>Gender:</strong> {this.props.gender}
            </p>
            <p>
                <strong>Height:</strong> {this.props.height}m
            </p>
            <p>
                <strong>Birth:</strong> {this.props.birth.toString().slice(0,15)}
            </p>
            </div>
            </div>
            </>
        )
    }
}