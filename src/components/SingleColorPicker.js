import React, { Component } from 'react'
import { Input } from 'reactstrap';

export default class SingleColorPicker extends Component {

    state = {
        value: 0,
    }

    handleInput = (e) => {
        this.setState({ value: e.target.value })
        this.props.onChange(e)
    }

    render() {
        return (
            <div className="colorPicker row">
                <div className={ this.props.color === 'r' ? 'colorDivRed' : this.props.color === 'g' ? 'colorDivGreen' : 'colorDivBlue'}></div>
                <p className="mx-2"> {this.props.color.toUpperCase()}: </p>
                <Input id={this.props.color} name="color" type="number" className="colorInput" onChange={this.handleInput} value={this.state.value} min="0" max="255"/>
            </div>
        )
    }
}