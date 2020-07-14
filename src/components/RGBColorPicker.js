import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

class RGBColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rValue: 20,
            gValue: 40,
            bValue: 60
        }
        this.handleRedChange = this.handleRedChange.bind(this);
        this.handleGreenChange = this.handleGreenChange.bind(this);
        this.handleBlueChange = this.handleBlueChange.bind(this);
    }

    handleRedChange(event) {
        console.log(event.target.value)
        this.setState({rValue: event.target.value});
    }

    handleGreenChange(event) {
        console.log(event.target.value)
        this.setState({gValue: event.target.value});
    }

    handleBlueChange(event) {
        console.log(event.target.value)
        this.setState({bValue: event.target.value});
    }

    render() {
        return (
            <div>
                <SingleColorPicker color="Red" value={this.state.rValue} changeColor={() => this.handleRedChange} />
                <SingleColorPicker color="Green" value={this.state.gValue} changeColor={() => this.handleGreenChange} />
                <SingleColorPicker color="Blue" value={this.state.bValue} changeColor={() => this.handleBlueChange} />
            </div>
        )
    }
}

export default RGBColorPicker
