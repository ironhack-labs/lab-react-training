import React, { Component } from "react"
import "./SingleColorPicker.css"

class SingleColorPicker extends Component {
    constructor (props) {
        super(props)
    }

    render() {

        const rgbGenerator = (color) => {
            if (color === "r") {
                return `rgb(${this.props.value}, 0, 0)`
            } else if (color ==="g") {
                return `rgb(0, ${this.props.value}, 0)`
            } else {
                return `rgb(0, 0, ${this.props.value})`
            }
        }
        
        return (
            <div className="SingleColorPicker">
                <div className="square" style={{ backgroundColor: rgbGenerator(this.props.color) }}>
                </div>
                <p>{this.props.color.toUpperCase()}</p>
                <input type="number" name={this.props.color} value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}

export default SingleColorPicker