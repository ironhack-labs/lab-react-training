import React, { Component } from "react"
import OneColorPicker from "./OneColorPicker";

class SingleColorPicker extends Component {
    state = {
        rValue: 50,
        gValue: 50,
        bValue: 50
    }

    handleChange = (value, color) => {
        switch (color) {
            case "r":
                this.setState({
                    rValue: value
                })
                break;
            case "g":
                this.setState({
                    gValue: value
                })
                break;
            case "b":
                this.setState({
                    bValue: value
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <OneColorPicker
                    color="r"
                    value={this.state.rValue}
                    onChange={this.handleChange}
                />

                <OneColorPicker
                    color="g"
                    value={this.state.gValue}
                    onChange={this.handleChange}
                />

                <OneColorPicker
                    color="b"
                    value={this.state.bValue}
                    onChange={this.handleChange}
                />
                <div style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`
                }} />
            </div>
        )
    }
}

export default SingleColorPicker;