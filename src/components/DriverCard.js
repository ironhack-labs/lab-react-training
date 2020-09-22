import React, { Component } from 'react'
import Rating from "./Rating"

export default class DriverCard extends Component {
    render() {
    
        return (
            <div>
                <Rating>{this.props.rating}</Rating>
            </div>
        )
    }
}
