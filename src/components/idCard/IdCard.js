import React, { Component } from 'react'
import './IdCard.css'

export default class IdCard extends Component {
    render() {
        return (
            <div className="idCardContainer">
                <div className="idCardImage">
                    <img src={this.props.picture} alt="picture"/>
                </div>
                <div className="idCardData">

                    <p><span>First name:</span> {this.props.firstName}</p>
                    <p><span>Last name:</span> {this.props.lastName}</p>
                    <p><span>Gender:</span> {this.props.gender}</p>
                    <p><span>Height:</span> {this.props.height}</p>
                    <p><span>Birth:</span> {this.props.birth.toString()}</p>

                </div>
                
            </div>
        )
    }
}
