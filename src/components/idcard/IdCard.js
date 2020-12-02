import React, { Component } from 'react';
import './IdCard.css';

export default class IdCard extends Component {
    render() {
    console.log(this.props);
        return (
            <div className="wrapper">
                <div>
                    <img src={this.props.picture} alt={this.props.firstName} />
                </div>
                <div>
                    <p><strong>First name: </strong>{this.props.firstName}</p>
                    <p><strong>Last name: </strong>{this.props.lastName}</p>
                    <p><strong>Gender: </strong>{this.props.gender}</p>
                    <p><strong>Height: </strong>{this.props.height}</p>
                    <p><strong>Birth: </strong>{this.props.birth.toString().slice(0,15)}</p>
                </div>
            </div>
        )
    }
}
