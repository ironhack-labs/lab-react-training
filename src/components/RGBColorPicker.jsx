import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

class RGBColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rValue: 250,
            gValue: 150,
            bValue: 0
        }
    }
    getResultColor = () => {
        return `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`
    }
    changeColor = ({target}, value) => {
        this.setState((state) => ({[value]: target.value}))
    }
    render() {
        return (
            <div>
                <div className='single-color'>
                    <span className='redbox box'></span>R: <SingleColorPicker color='r' value={this.state.rValue} onChange={(event) => this.changeColor(event, 'rValue')}/>
                </div>
                <div className='single-color'>
                    <span className='greenbox box'></span>G: <SingleColorPicker color='g' value={this.state.gValue} onChange={(event) => this.changeColor(event, 'gValue')}/>
                </div>
                <div className='single-color'>
                    <span className='bluebox box'></span>B: <SingleColorPicker color='b' value={this.state.bValue} onChange={(event) => this.changeColor(event, 'bValue')}/>
                </div>
                <div className='single-color'>
                    <span className='box' style={{backgroundColor: this.getResultColor()}}></span>rgb({this.state.rValue}, {this.state.gValue}, {this.state.bValue})
                </div>
            </div>
        )
    }
}

export default RGBColorPicker
