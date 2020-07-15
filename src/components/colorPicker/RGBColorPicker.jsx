import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'


export default class RGBColorPicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            rValue: 100,
            gValue: 256,
            bValue: 0
        }
    }
    
    render() {

        const {rValue, gValue, bValue} = this.state
        const rgbStyle = {
            fullrgb: {backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`},
            red: {backgroundColor: `rgb(${rValue}, 0, 0)`},
            green: {backgroundColor: `rgb(0, ${gValue}, 0)`},
            blue: {backgroundColor: `rgb(0, 0, ${bValue})`}
        }
        

        return (
            <div className="col-4">
                <SingleColorPicker name={rValue} bgColor={rgbStyle.red}/>
                <SingleColorPicker name={gValue} bgColor={rgbStyle.green}/>
                <SingleColorPicker name={bValue} bgColor={rgbStyle.blue}/>
                <div>
                    <div style={rgbStyle.fullrgb} className="rgb-box"></div>
                    <p>rgb({rValue}, {gValue}, {bValue})</p>
                </div>
            </div>
        )
    }
}
