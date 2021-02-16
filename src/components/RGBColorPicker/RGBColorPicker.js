/* eslint-disable default-case */
import React, {Component} from "react"
import SingleColorPicker from "./SingleColorPicker"

class RGBColorPicker extends Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }
    createColor = (color,value) => {
        switch (color) {
            case "red":
            this.setState({rValue:value})
            break;
            case "green":
            this.setState({gValue:value})
            break;
            case "blue":
            this.setState({bValue:value})
        }
    }
    render(){
        return (
            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between",alignItems:"center"}}>
                <SingleColorPicker value = {this.state.rValue} color = "red" onChange={ this.createColor} />
                <SingleColorPicker value = {this.state.gValue} color = "green" onChange={ this.createColor} />
                <SingleColorPicker value = {this.state.bValue} color ="blue" onChange={ this.createColor} />
                <div style={{display:"flex"}}>
                    <div style={{border:"2px solid black",width:"80px",height:"80px",background:`rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`}}></div>
                    <p>rgb{`${this.state.rValue},${this.state.gValue},${this.state.bValue}`}</p>
                </div>
            </div>
        )
    }
}

export default RGBColorPicker;