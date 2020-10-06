import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0,
    }

    colorChange = (name, value) => {
        this.setState(() => ({
            [name]: value
        }));

        console.log(name, this.state[name])
    }

    render() {
        return (
            <div>
                <SingleColorPicker name="rValue" color='R' value={this.state.rValue} onChange={this.colorChange}/>
                <SingleColorPicker name="gValue" color='G' value={this.state.gValue} onChange={this.colorChange}/>
                <SingleColorPicker name="bValue" color='B' value={this.state.bValue} onChange={this.colorChange}/>
                
            </div>
        )
    }
}
