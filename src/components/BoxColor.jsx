import React, { Component } from 'react'

class BoxColor extends Component {
    backgroundColor = ({r,g,b}) => {
        return `rgb(${r}, ${g}, ${b})`
    }
    componentToHex = c => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;        
    }
    backgroundColorHex = ({r,g,b}) => {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
    render() {
        return (
            <div className='box-color' style={{backgroundColor: this.backgroundColor(this.props)}}>
                <p>rgb({this.props.r},{this.props.g},{this.props.b})</p>
                <p>{this.backgroundColorHex(this.props)}</p>
            </div>
        )
    }
}

export default BoxColor
