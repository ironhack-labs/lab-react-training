import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'


export default class RGBColorPicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            rValue: 0,
            gValue: 0,
            bValue: 0
        }
    }

    handleChange = ({target}) => {
        this.setState({...this.state, [target.name]: target.value})
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
                <SingleColorPicker name="rValue" value={rValue} bgColor={rgbStyle.red} changeFn={this.handleChange} />
                <SingleColorPicker name="gValue" value={gValue} bgColor={rgbStyle.green} changeFn={this.handleChange}/>
                <SingleColorPicker name="bValue" value={bValue} bgColor={rgbStyle.blue} changeFn={this.handleChange}/>
                <div>
                    <div style={rgbStyle.fullrgb} className="rgb-box"></div>
                    <p>rgb({rValue}, {gValue}, {bValue})</p>
                </div>
            </div>
        )
    }
}
