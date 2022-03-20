import React, { Component } from "react"

class OneColorPicker extends Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }

    computeColor() {
        switch (this.props.color) {
            case "r":
                return "red"
            case "g":
                return "green"
            case "b":
                return "black"
            default:
                break;
        }
    }

    render() {
        const { color, value, onChange } = this.props
        return (
            <div style={{ display: "flex" }}>
                <div style={{ width: "50px", height: "50px", backgroundColor: this.computeColor() }} />
                <div>
                    {color}:
                </div>
                <div>
                    <input type="number" min={0} max={255} value={value} onChange={e => onChange(e.target.value, color)} />
                </div>
            </div>
        )
    }
}

export default OneColorPicker;