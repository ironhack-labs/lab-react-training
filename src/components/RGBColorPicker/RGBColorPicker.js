import React, { Component } from 'react';
import {SingleColorPicker} from '../SingleColorPicker/SingleColorPicker';

class RGBColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rValue: 0,
            gValue: 0,
            bValue: 0
        }
    }

    updateR = value => {
        this.setState({
            rValue: value,
        })
    }

    updateG = value => {
        this.setState({
            gValue: value,
        })
    }

    updateB = value => {
        this.setState({
            bValue: value,
        })
    }

    render() {

        return (
            <div>
               <SingleColorPicker color='R:' value={this.state.rValue} changeColor={this.updateR} />
               <SingleColorPicker color='G:' value={this.state.gValue} changeColor={this.updateG} />
               <SingleColorPicker color='B:' value={this.state.bValue} changeColor={this.updateB} />
               <div>rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})</div>
            </div>
        )
    }
}

export {RGBColorPicker};