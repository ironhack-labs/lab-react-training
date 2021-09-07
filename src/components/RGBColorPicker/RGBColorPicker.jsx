import React, { Component } from "react"
import SingleColorPicker from "../SingleColorPicker/SingleColorPicker"
import "./RGBColorPicker.css"

class RGBColorPicker extends Component {
    constructor (props) {
        super(props)

        this.state = {
            rValue: 0,
            gValue: 0,
            bValue: 0
        }
    }

    onChange = (e) => {
        const value = `${e.target.name}Value`

        this.setState ({
            [value]: e.target.value === "" ? 0 : e.target.value
        })
    }

    render () {
        return (
            <div className="RGBColorPicker">
                <SingleColorPicker color="r" value={this.state.rValue} onChange={this.onChange} />
                <SingleColorPicker color="g" value={this.state.gValue} onChange={this.onChange} />
                <SingleColorPicker color="b" value={this.state.bValue} onChange={this.onChange} />
                <div className="final-rgb">
                    <div className="square" style={{ backgroundColor: `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})` }}>
                    </div>
                    <p>{`rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`}</p>
                </div>
            </div>
        )
    }
}

export default RGBColorPicker