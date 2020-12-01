import React, { Component } from 'react';
import SingleColorPicker from "./SingleColorPicker"

class RGBColorPicker extends Component {

    state = {r: 0, g: 0, b: 0}

    handleChange = (color, e)=>{
        switch(color){
            case "r":
                this.setState({r: e.target.value});
                break;
            case "g":
                this.setState({g: e.target.value});
                break;
            case "b":
                this.setState({b: e.target.value});
                break;
        }
    }
    render() {
        return (
            <div>
                <SingleColorPicker color="r" onChange={this.handleChange}></SingleColorPicker>
                <SingleColorPicker color="g" onChange={this.handleChange}></SingleColorPicker>
                <SingleColorPicker color="b" onChange={this.handleChange}></SingleColorPicker>
                <span className="color-box" style={{backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`}}></span>
            </div>
        );
    }
}

export default RGBColorPicker;