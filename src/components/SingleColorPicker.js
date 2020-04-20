import React, { Component } from 'react';
import './SingleColorPicker.css'

class SingleColorPicker extends Component {
    getColorValue = (e) => {
        const { onChange, color } = this.props;

        this.setState({
            [e.target.name]: parseInt(e.target.value, 10)
        });

        onChange(e.target.value, color);
    };

    getColorBackground = () => {
        const { color } = this.props;
        let backgroundColor = '';

        if (color === 'r') {
            backgroundColor = 'red';
        } else if (color === 'g') {
            backgroundColor = 'green';
        } else {
            backgroundColor = 'black';
        }

        return backgroundColor;
    }

    render() {
        const { color, value } = this.props;

        return (
            <div className='SingleColorPicker'>
                <div style={{backgroundColor: this.getColorBackground()}} className='SingleColorPicker-square'></div>
                <div className='SingleColorPicker-form'>
                    <label htmlFor='value'>{color.toUpperCase()}: </label>
                    <input className='SingleColorPicker-input' id='value' type='number' name='value' value={value} onChange={this.getColorValue} min='0' max='255'></input>
                </div>
            </div>
        );
    }
}

export default SingleColorPicker;