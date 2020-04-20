import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';



class RgbColorPicker extends Component {
    
    state = {
        red: 0,
        green: 0,
        blue: 0
    }

    handleInputChange = (e) => {
        this.setState(
            {[e.target.name] : e.target.value}
        )
    }

    render() {
        const {red, green, blue} = this.state;
        const colorBoxStyle= {backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: "100px", height: "100px"};
        return (
            <div>
                <SingleColorPicker color="red" value={red} onChange={this.handleInputChange}/>
                <SingleColorPicker color="green" value={green} onChange={this.handleInputChange}/>
                <SingleColorPicker color="blue" value={blue} onChange={this.handleInputChange}/>
                <div className="IdCard">
                    <div className="left" style={colorBoxStyle}></div>
                    <div className="right">
                        RGB({red}, {green}, {blue})
                    </div>
                </div>
            </div>
          
        );
    }
};
    
export default RgbColorPicker;