import {Input} from 'reactstrap';
import React, { Component } from 'react'
import SingleColorPicker from "./SingleColorPicker";

class RGBColorPicker extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            r:100,
            g:100,
            b:100
        }
    }

    onChange(field, value) {
        // parent class change handler is always called with field name and value
        console.log(field);
        console.log(value);
        this.setState({[field]: value});
    }

    setColor(color,value){
        switch (color) {
            case "r":
                this.setState({r:value});
            break;
            case "g":
                this.setState({g:value});
            break;
            case "b":
                this.setState({b:value});
            break;
            default:
        }
    }

    render () {
        return (
            <div className="colorPicker">
                <div>
                    <SingleColorPicker
                        color={"r"}
                        value={this.state.r}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div>
                    <SingleColorPicker
                        color={"g"}
                        value={this.state.g}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div>
                    <SingleColorPicker
                        color={"b"}
                        value={this.state.b}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div className="rgbResult">
                    <div className="colorSquare" style={{backgroundColor: `rgb(${this.state.r},${this.state.g},${this.state.b})`}}/>
                    <div className="result"><span>rgb {this.state.r},{this.state.g},{this.state.b}</span></div>
                </div>
            </div>
        )
    }
}
export default RGBColorPicker;