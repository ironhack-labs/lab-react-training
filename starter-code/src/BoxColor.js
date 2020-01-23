import React, { Component } from 'react';
import "./index.css";

class BoxColor extends Component {

    render() {
        let myColorHex = `#${this.props.r.toString(16).padStart(2,"0")}${this.props.g.toString(16).padStart(2,"0")}${this.props.b.toString(16).padStart(2,"0")}`;

        let textColor = myColorHex==='#ff0000' ? 'white' : 'black';

        let myStyle = {
            backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`,
            height: 100,
            padding: 4,
            border: "2px solid black",
            margin: 7,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: textColor
        }

        return <div>
            <div style={myStyle}>
                <span>rgb({this.props.r},{this.props.g},{this.props.b})</span>
                <span>{myColorHex}</span>
            </div>
        </div>
    }
}



export default BoxColor;
