import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'


export default class RGBColorPicker extends Component {
    
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0,
    }

    onChange = (event) => {
        if (event.target.id === 'r') {
            this.setState({ rValue: event.target.value})
        } else if (event.target.id === 'g') {
            this.setState({ gValue: event.target.value})
        } else if (event.target.id === 'b') {
            this.setState({ bValue: event.target.value})
        } else {
        }
    }

    render() {

        return (
            <div>
               <SingleColorPicker 
                   color='r'
                   value={0}
                   onChange={this.onChange}
               />
               <SingleColorPicker 
                   color='g'
                   value={0}
                   onChange={this.onChange}
               />
               <SingleColorPicker 
                   color='b'
                   value={0}
                   onChange={this.onChange}
               />
               <div className="colorPicker row">
                    <div className="colorDiv" style={{backgroundColor: `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`}}></div>
                        <p className="mx-2"> rgb({this.state.rValue}, {this.state.gValue}, {this.state.bValue})</p>
                    </div>
            </div>
        )
    }
}