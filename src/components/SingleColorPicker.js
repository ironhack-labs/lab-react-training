import React, { Component } from 'react'

export class SingleColorPicker extends Component {
   
    render() {
        return (
            <div>
                <input type="number" name={this.props.name} value={this.props.value} 
                onChange={this.props.onChange} min='0' max='255' />
            </div>
        )
    }
}

export default SingleColorPicker
