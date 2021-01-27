import React, { Component } from 'react'

class RGBColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            rValue: 0,
            gValue: 0,
            bValue: 0
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
                <div style={{ backgroundColor: `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`,  width: 50, height: 50 }}></div>
                <p>rgb({this.state.rValue}, {this.state.gValue}, {this.state.bValue})</p>
            </div>
        )
    }
}

export default RGBColorPicker;