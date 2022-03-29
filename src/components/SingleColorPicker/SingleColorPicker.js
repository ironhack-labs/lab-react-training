import react, { Component } from "react";
import './SingleColorPicker.css'

class SingleColorPicker extends Component {
    
    render() {
        const  { color, value, onChange } = this.props

        return (
            <div className="single-color">
                <div 
                    className="box-color" 
                    style={{backgroundColor: `rgb(${color === "r" ? value : 0}, ${color === "g" ? value : 0}, ${color === "b" ? value : 0} )`}}>
                </div>

                <label>{color === "r" ? "R:" : color === "g" ? "G:" : "B:"}</label>

                <input
                    value={value}
                    onChange={onChange} 
                    min="0"
                    max="250"
                    type="number"
                    name={color === "r" ? "rValue" : color === "g" ? "gValue" : "bValue"}>
                </input>
            </div>
        )
    }
}

export default SingleColorPicker