import React, { Component } from 'react';

class BoxColor extends Component{

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
      
    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };

    render() {
        const {r, g, b} = this.props;
        const style = {
            "background-color": `rgb(${r}, ${g}, ${b})`,
            "border": "solid 2px black",
            "margin": "10px",
            "padding": "20px",
            "font-size": "17px",
            "display": "flex",
            "flex-direction": "column",
            "align-items": "center",
            "line-height": "2px",
        };
        
        return(
            
            <div style={style} className="box-color">
                <p>rgb({ r }, { g }, { b })</p>
                <p>{this.rgbToHex(r, g, b)}</p>
            
            </div>

        )
    }
}

export default BoxColor;
       