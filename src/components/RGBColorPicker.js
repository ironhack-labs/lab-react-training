import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export class RGBColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rValue: 100,
            gValue: 240,
            bValue: 27

        }
    }

    handleChange = (evento) => {
        this.setState({
            [evento.target.name]: evento.target.value
        })  
    }

    render() {
   
        return (
            <div>
                <SingleColorPicker name="rValue" value={this.state.rValue} onChange={this.hangleChange} />
                <SingleColorPicker name="gValue" value={this.state.gValue} onChange={this.hangleChange} />
                <SingleColorPicker name="bValue" value={this.state.bValue} onChange={this.hangleChange} />
                <p>rgb ({this.state.rValue},{this.state.gValue}, {this.state.bValue} )</p>
            </div>
        )
    }
}

export default RGBColorPicker
