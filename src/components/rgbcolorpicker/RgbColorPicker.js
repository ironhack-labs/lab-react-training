import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';


class RgbColorPicker extends Component {
    
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }

    render() {
        return (
            <div>
                <SingleColorPicker />
                <SingleColorPicker />
                <SingleColorPicker />
            </div>
          
        );
    }
};
    
export default RgbColorPicker;