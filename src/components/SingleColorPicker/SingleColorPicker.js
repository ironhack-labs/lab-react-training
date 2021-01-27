import React, { Component } from 'react';

class SingleColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 0
        }
    }

    updateValue = e => {
        this.setState({color: e.target.value}, () => {
            this.props.changeColor(this.state.color);
        })
    }


    render() {
        return (
            <div>
                <label>{this.props.color}</label>
                <input type='number' name='colorInput' value={this.state.color} onChange={this.updateValue} min='0' max='255' /> 
            </div>
        )
    }
}

export {SingleColorPicker};