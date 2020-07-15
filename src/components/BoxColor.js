import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        
        const { r, g, b } = this.props
        let color = (this.props.r + this.props.g + this.props.b > 127 * 3) ? 'black' : 'white'
        return (
            <div style={{ color: color, backgroundColor: `rgb(${r},${g},${b})` }}>
                <div>
                    <p>RGB ({r}, {g}, {b})</p>
                </div>
            </div>
        )
    }
}