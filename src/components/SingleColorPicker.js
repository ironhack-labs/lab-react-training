import React, { Component } from 'react';

class SingleColorPicker extends Component {
    render({color, onChange} = this.props) {
        let bgColor, text;
        switch(color){
            case "r":
                bgColor = "red";
                text = "R";
                break;
            case "g":
                bgColor = "green";
                text = "G";
                break;
            case "b":
                bgColor = "blue";
                text = "B"
                break;
        }
        return (
            <div>
                <span className="color-box" style={{backgroundColor: bgColor}}></span>
                {text}: 
                <input type="number" onChange={(e) => {onChange(color, e)}}></input>
            </div>
        );
    }
}

export default SingleColorPicker;