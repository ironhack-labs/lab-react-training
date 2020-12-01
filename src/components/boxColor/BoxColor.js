import React, { Component } from 'react'
import './BoxColor.css'

export default class BoxColor extends Component {


    styleHandler = (r, g, b) => {

        const color = `rgb(${r},${g},${b})`

        return {backgroundColor: color}
        
    }


    render() {
        return (
            <div className="boxColorContainer">
                <h1 style={this.styleHandler(this.props.r,this.props.g,this.props.b)}> rgb({this.props.r},{this.props.g},{this.props.b})</h1>
            </div>
        )
    }
}
