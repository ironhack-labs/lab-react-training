import React from 'react';
import './RGBColorPicker.css';
import SingleColorPicker from '../SingleColorPicker/SingleColorPicker';

class RGBColorPicker extends React.Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;

        if(value >= 0 && value <= 255) {
            this.setState({ [name]: value })
        };
    };

    render(){
        const { rValue, gValue, bValue} = this.state;

        return (
            <div className="color-picker">
                <SingleColorPicker
                    color="r"
                    value={rValue}
                    onChange={this.handleOnChange}
                />
                <SingleColorPicker
                    color="g"
                    value={gValue}
                    onChange={this.handleOnChange}
                />
                <SingleColorPicker
                    color="b"
                    value={bValue}
                    onChange={this.handleOnChange}
                />
                <div className="final-color-div">
                    <div className='final-color' style={{backgroundColor: `rgb(${rValue},${gValue},${bValue})`}}></div>
                    <p className='mx-3'>rgb({`${rValue},${gValue},${bValue}`})</p>
                </div>
            </div>
        );
    };
};

export default RGBColorPicker;