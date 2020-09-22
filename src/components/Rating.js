import React, { Component } from 'react';

export default class Rating extends Component {
    render() {
        return (
            <div>
                <p>{this.props.type}</p>
                <p>{this.props.number}</p>
                <div>
                    <p>Expires {this.props.expirationMonth}/{this.props.expirationMonth}   {this.props.bank}</p>
                    <p>{this.props.owner}</p>
                </div>
            </div>
        )
    }
} 