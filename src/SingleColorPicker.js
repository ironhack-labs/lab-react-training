import React, { Component } from 'react'

export class SingleColorPicker extends Component {
    handleChange = (e)=>{
            this.props.handleChange(this.props.color, e.target.value)
    }
    render() {
        return (
            <input type='number' value={this.props.value} onChange={this.handleChange} max='255' />
        )
    }
}

export default SingleColorPicker
