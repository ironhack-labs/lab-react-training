import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }

    handleChange = (colorValueNew, colorLetterNew) => {
        let value = '';

        if (colorLetterNew === 'r') {
            value = 'rValue';
        } else if (colorLetterNew === 'g') {
            value = 'gValue';
        } else {
            value = 'bValue';
        }

        this.setState({
            [value]: colorValueNew
        });
    };

    getRGBColor = () => {
        const { rValue, gValue, bValue } = this.state
    
        return `rgb(${rValue}, ${gValue}, ${bValue})`
    }

    render() {
        const { rValue, gValue, bValue } = this.state;

        return (
            <div>
                <SingleColorPicker color='r' value={rValue} onChange={this.handleChange}/>
                <SingleColorPicker color='g' value={gValue} onChange={this.handleChange}/>
                <SingleColorPicker color='b' value={bValue} onChange={this.handleChange}/>
                <div className='SingleColorPicker'>
                    <div style={{backgroundColor: this.getRGBColor()}} className='SingleColorPicker-square'></div>
                    <p>{this.getRGBColor()}</p>
                </div>
            </div>
        );
    }
}

export default RGBColorPicker;