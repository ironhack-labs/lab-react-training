import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export class RGBColorPicker extends Component {
    state={
        rValue:0,
        gValue:0,
        bValue:0
    }
    handleChange = (color, value) => {
        color ==='r'? this.setState({rValue:value}) : color==='g'? this.setState({gValue:value}) :  this.setState({bValue:value})
    }
    
    render() {
        return (
            <div>
                <SingleColorPicker color='r' value={this.state.rValue} handleChange={this.handleChange}/>
                <SingleColorPicker color='g' value={this.state.gValue} handleChange={this.handleChange}/>
                <SingleColorPicker color='b' value={this.state.bValue} handleChange={this.handleChange}/>
                <div ><p><span style={{backgroundColor:`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`, height:'50px', width:'50px', display:'inline-block'}}></span>rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})</p></div>
            </div>
        )
    }
}

export default RGBColorPicker
