import React, { Component } from 'react'
import {SingleColourPicker} from '../singlecolourpicker/SingleColourPicker'

class RGBColourPicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            rValue:0,
            gValue:0,
            bValue:0
        }
    }
    

    RGBColourCreation = (rgb, val) =>{
        console.log(rgb, val)
        const colour = rgb
        const value = val
        let name
        if(colour === 'r'){
            name = 'rValue'
        }else if(colour === 'g'){
            name = 'gValue'
        }else if(colour === 'b'){
            name = 'bValue'
        }

        this.setState({
            [name]: value
        })
    }
    
    
    render() {
        return (
            <div>
                <SingleColourPicker colour="r" value={this.state.rValue} colourChange={this.RGBColourCreation} />
                <SingleColourPicker colour="g" value={this.state.gValue} colourChange={this.RGBColourCreation} />
                <SingleColourPicker colour="b" value={this.state.bValue} colourChange={this.RGBColourCreation} />
                <div className="columns">
                    <div className="column is-1">
                        <div style={{backgroundColor:`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`, width:'50px', height:'50px'}}/>
                    </div>
                    <p>RGB({this.state.rValue},{this.state.gValue},{this.state.bValue})</p>
                </div>
            </div>
        )
    }
}

export {RGBColourPicker}