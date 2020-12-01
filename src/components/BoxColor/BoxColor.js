
import React, { Component } from 'react'

export default class BoxColor extends Component {


    render() {
        return (
            <div>
                <div style={{backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`}}>
                    rgb({this.props.r}, {this.props.g}, {this.props.b})
                </div>
            </div>
        )
    }
}


