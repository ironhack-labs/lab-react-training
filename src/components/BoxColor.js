import React from 'react'

class BoxColor extends React.Component{

    rgbToHex(rgb){ 
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
      };
      

    render(){
        const {r, g, b} = this.props;
        const color = {
            backgroundColor: `rgb(${r},${g},${b})`,
            padding: `20px`,
            border: `1px solid black`,
            margin: `10px`
        }
        return(
            <div style={color}>
                rgb({r},{g},{b}))
                <p>#{this.rgbToHex(r)+ this.rgbToHex(g)+ this.rgbToHex(b)}</p>
            </div>
        )
    }
}

export default BoxColor
