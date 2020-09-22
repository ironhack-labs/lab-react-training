import React, { Component } from 'react';

export default class DriverCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"></img>
                </div>
                <div>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.rating}</p>
                    <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
                </div>
            </div>
        )
    }
} 