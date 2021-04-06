import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'
import './../styles/iteration16.css'


export default class RGBColorPicker extends Component {

    state = {
        rValue : 0,
        gValue: 0,
        bValue: 0
    }

    changeColor = (color, value) => {
        this.setState({[color]: value})
    }

    render() {
        return (
            <div >
                <div className="Lifting__box">
                <SingleColorPicker 
                    color="r"
                    value={this.state.rValue}
                    onChange={this.changeColor}
                />
                </div>
            </div>

        )
    }
}
