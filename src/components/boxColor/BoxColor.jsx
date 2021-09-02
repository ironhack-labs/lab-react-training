import React from "react";
import "./BoxColor.css";

export default class BoxColor extends React.Component {


    render() {
        const boxStyles = {backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`}
        return (
        <div className="BoxColor colorBox" style={boxStyles}>
            <p>rgb({this.props.r},{this.props.g},{this.props.b})</p>
            
        </div>
        );
    }
}