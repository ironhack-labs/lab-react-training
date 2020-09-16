import React from 'react';
import SingleColorPicker from  './SingleColorPicker'

class RGBColorPicker extends React.Component{
    state={
        rValue:0,
        gValue:0,
        bValue:0,
        currentColor: 'rgb(0, 0, 0)'
    }

    handleChange = (value, color) => {
        let newRed = this.state.rValue
        let newGreen = this.state.gValue
        let newBlue = this.state.bValue
        switch(color){
            case "R":
                newRed = value;
                break;
            case "G":
                newGreen = value;
                break;
            case "B":
                newBlue = value;
                break;
            default:
                break;
        }
        let newColor = 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ')'
        this.setState({
            rValue: newRed,
            gValue: newGreen,
            bValue: newBlue,
            currentColor: newColor
        })
    }
    render() {
        return (
            <div>
                <SingleColorPicker onChange={this.handleChange} color="R" numValue={this.state.rValue} currentColor={'rgb(' + this.state.rValue + ',0, 0)'}/>
                <SingleColorPicker onChange={this.handleChange} color="G" numValue={this.state.gValue} currentColor={'rgb(0,' + this.state.gValue + ',0)'}/>
                <SingleColorPicker onChange={this.handleChange} color="B" numValue={this.state.bValue} currentColor={'rgb(0,0,' + this.state.bValue + ')'}/>
                <div className="colorPicker">
                    <div style={{
                        backgroundColor: this.state.currentColor, 
                        border:"1px solid black",
                        width:"50px", 
                        height: "50px"}}></div>
                    {this.state.currentColor}
                </div>
            </div>
        )
    }
}

export default RGBColorPicker