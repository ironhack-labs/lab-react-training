import React, { Component } from "react"

class BoxColor extends Component {
    state = {}
    render() {
        const { r, g, b } = this.props
        return (
            <div style={{width: "200px", height: "100px", backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
                BoxColor
            </div>
        )
    }
}

export default BoxColor;