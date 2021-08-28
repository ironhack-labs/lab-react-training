import React from 'react';
import "./BoxColor.css";

export default class BoxColor extends React.Component {
    render() {
        const r = this.props.r;
        const g = this.props.g;
        const b = this.props.b;

        function numberToHex(num) {
            num = parseInt(num).toString(16);
            return (num.length==1) ? "0"+num : num;
        }

        const boxesColor = {
            'background-color': `rgb(${r}, ${g}, ${b})`,
            'color': r + g + b <= 255 ? 'white' : 'black'
        }

        return(
        <div style={boxesColor} className="BoxColor">
            <span>rgb: ({r},{g},{b})</span>
            <span>#{numberToHex(r)}{numberToHex(g)}{numberToHex(b)}</span>
        </div>
        )
    }
}