import React, { Component } from 'react';
import './IdCard.css';

export default class IdCard extends Component {

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-img">
                        <img src={this.props.picture} alt="profile picture" />
                    </div>
                    <div className="card-text">
                        <p><strong>First name:</strong> {this.props.firstName} </p>
                        <p><strong>Last Name:</strong> {this.props.lastName}</p>
                        <p><strong>Gender: </strong>{this.props.gender} </p>
                        <p><strong>Height:</strong> {this.props.height} </p>
                        <p><strong>Birth:</strong> {this.props.birth.toString().slice(0,15)} </p>
                    </div>
                </div>
            </>
        )
    }
}
