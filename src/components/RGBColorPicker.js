import React, { Component } from 'react'

class RGBColorpicker extends Component {
    state = {
        red:"",
        green:"",
        blue:""
    }

    render() {
        const handleChange = (e) => {
            let value = e.target.value
            this.setState({[e.target.id]: value})
        }
    
        const colorResult = {
            backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
            width: "100px",
            height:"100px",
            padding : "30px"
        }
        
        return (
            <div className="RGBColorPicker container">
                <div className="idCard" style={{ backgroundColor : "red", width: "100px", height:"100px"}}></div>
                <label>R:</label>
                <input min="0" max="255" id="red" name="red" type="number" value={this.state.red} onChange={handleChange}/>
    
                <div className="idCard" style={{ backgroundColor : "green", width: "100px", height:"100px"}}></div>
                <label>G:</label>
                <input min="0" max="255" id="green" name="green" type="number" value={this.state.green} onChange={handleChange}/>
    
                <div className="idCard"  style={{ backgroundColor : "blue", width: "100px", height:"100px"}}></div>
                <label>B:</label>
                <input min="0" max="255" id="blue" name="blue" type="number" value={this.state.blue} onChange={handleChange}/>
    
                <div className="idCard" style={colorResult}></div>
                <p>RGB =({this.state.red},{this.state.green},{this.state.blue}) </p>
    
    
            </div>
        )
    }
}

export default RGBColorpicker