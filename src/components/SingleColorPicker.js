import React, { Component } from 'react'
import './SingleColorPicker.css'

export default class SingleColorPicker extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            rgbString: 'rgb(0,0,0)'
        }
    }

    handleChange(e) {
        let color = this.props.color.toLowerCase()
        let value = e.target.value;
        let rgb = '';
        this.props.changeColorValue(color, value)

        switch(color) {
            case 'r':
                rgb=`rgb(${value},0,0)`;
                break;
            case 'g':
                rgb=`rgb(0,${value},0)`;
                break;
            case 'b':
                rgb=`rgb(0,0,${value})`;
                break;
            default:
        }

        this.setState({
            rgbString: rgb
        })
    }

    render() {
        return (
            <div className='container'>
                <div className={`square`} style={{backgroundColor: this.state.rgbString}}></div>
                <label>{this.props.color}</label>
                <input type='number' onChange={e => this.handleChange(e)}/>
            </div>
        )
    }
}
