import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export default class RGBColorPicker extends Component {

    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0,
        currentColor: 'rgb(0,0,0)'
    }

    handleChange = (value, letter) => {
        let newRed = this.state.rValue
        let newGreen = this.state.gValue
        let newBlue = this.state.bValue
        switch(letter){
            case "R":
                newRed = value;
                break;
            case "G":
                newGreen = value;
                break;
            case "B":
                newBlue = value;
                break;
            default:
                break;
        }
        let newColor = 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ')'
        this.setState({
            rValue: newRed,
            gValue: newGreen,
            bValue: newBlue,
            currentColor: newColor
        })

    }


    render() {
        return (
            <div>
                <SingleColorPicker letter={'R'} onChange={this.handleChange}/>
                <SingleColorPicker letter={'G'} onChange={this.handleChange}/>
                <SingleColorPicker letter={'B'} onChange={this.handleChange}/>
                <div style={{display: 'flex'}}>
                    <div className="colorbox" style={{backgroundColor: this.state.currentColor}}></div> 
                    <p>rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})</p>
                </div>
            </div>
        )
    }
}
