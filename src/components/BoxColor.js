import React from 'react'

class BoxColor extends React.Component{

    rgbToHex(num){ 
        let hex = Number(num).toString(16)
        if (hex.length < 2) {
             hex = "0" + hex
        }
        return hex
    }
      

    render(){
        const {r, g, b}=this.props
        const color = `rgb(${r},${g},${b})`
        const hexColor = `#${this.rgbToHex(r)}${this.rgbToHex(g)}${this.rgbToHex(b)}`
        const divStyle = {
            backgroundColor: color,
            textAlign: "center",

        }
        return (
            <div className="box" style={divStyle}>
                <p>{color}</p>
                <p>{hexColor}</p>
            </div>
        )
    }
}

export default BoxColor