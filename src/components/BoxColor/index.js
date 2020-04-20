import React, { Component } from 'react';
import "./style.css";

class BoxColor extends Component {
    render(){
        const {r,g,b} = this.props;
        return <div className="box h" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}></div>

    }
}

export default BoxColor;