import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {

    constructor(props){
        super(props);
        this.handleColorValue = this.handleColorValue.bind(this);
        this.state = {
            rValue: 0,
            gValue: 0,
            bValue: 0
        }
    }

    handleColorValue(color, value) {
        let colorToUpdate = `${color}Value`;
        this.setState({
            [colorToUpdate]:value
        })
    }
    

    render() {
        let r = this.state.rValue;
        let g = this.state.gValue;
        let b = this.state.bValue;
        return (
            <div>
                <SingleColorPicker color='R' changeColorValue={this.handleColorValue}/>
                <SingleColorPicker color='G' changeColorValue={this.handleColorValue}/>
                <SingleColorPicker color='B' changeColorValue={this.handleColorValue}/>
                <div>
                    <div className='square' style={{backgroundColor: `rgb(${r},${g},${b})`}}></div>
                    <p>rgb({` ${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue}`})</p>
                </div>
            </div>
        )
    }
}