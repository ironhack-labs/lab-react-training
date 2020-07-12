import React, { Component } from 'react'

class SingleColorPicker extends Component {

    render() {
        return (
            <input 
                name={this.props.color} 
                type="range" 
                min='0' 
                max='255' 
                step='1' 
                value={this.props.value} 
                onChange={this.props.onChange} 
            />
        )
    }
}

export default SingleColorPicker
