import {Input} from 'reactstrap';
import React, { Component } from 'react'

class SingleColorPicker extends React.Component {
    constructor(props){
        super(props);
    }

    onFieldChange(event) {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    setColor() {
        switch (this.props.color) {
            case "r":
                return "red";
            case "g":
                return "green";
            case "b":
                return "blue";
            default:
        }
    }
    render (color,value) {
        return(
            <div className="singleColorPicker">
                <div className="colorSquare" style={{backgroundColor: `${this.setColor()}`}}/>
                <div className="form">
                    <span>{this.props.color}:</span>
                    <Input onChange={this.onFieldChange.bind(this)} type="Number" name={this.props.color} value={this.props.value} max="255" min="0"/>
                </div>
            </div>
        )
    }
}

export default SingleColorPicker;