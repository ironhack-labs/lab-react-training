import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {
    state = {
        rValue: 150,
        gValue: 150,
        bValue: 150,
    }

    colorChange = async (name, value) => {
        await this.setState(() => ({
            [name]: value
        }));
    }

    render() {
        const {rValue, gValue, bValue} = this.state;
        const colorPreview = {
            backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
            width: '50px',
            height: '50px'
        };
        const pickerDiv = {
            display: 'flex',
            alignItems: 'center'
        };

        return (
            <div>
                <SingleColorPicker 
                    name="rValue" 
                    color='R' 
                    value={this.state.rValue} 
                    onChange={this.colorChange}/>
                <SingleColorPicker 
                    name="gValue" 
                    color='G' 
                    value={this.state.gValue} 
                    onChange={this.colorChange}/>
                <SingleColorPicker 
                    name="bValue" 
                    color='B' 
                    value={this.state.bValue} 
                    onChange={this.colorChange}/>

                <div style={pickerDiv}>
                    <div style={colorPreview}></div>
                    <p>{`rgb(${rValue}, ${gValue}, ${bValue})`}</p>
                </div>
            </div>
        )
    }
}
