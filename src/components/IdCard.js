import React, { Component } from 'react'
import './IdCard.css';


export default class IdCard extends Component {
    render() {
        return (
            <div className='idCard'>
            <div >
                <img src={this.props.picture} alt="card-img"/>
            </div>
            <div>
                <p><strong>First Name:</strong>{this.props.firstName}</p>
                <p><strong>Last Name:</strong>{this.props.lastName}</p>
                <p><strong>Gender:</strong>{this.props.gender}</p>
                <p><strong>Height:</strong>{this.props.height/100}</p>
                <p><strong>Birth:</strong>{this.props.birth}</p>
            </div>
        </div>
        )
    }
}

