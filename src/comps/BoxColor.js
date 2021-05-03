// imports 
import React from 'react'


//components
class BoxColor extends React.Component{
    rgbToHex(component){ 
      let hex = Number(component).toString(16);
        if (hex.length < 2) {
          hex = "0" + hex;
        }
        return hex;
      };
      
    render(){

        const {r, g, b} = this.props
        return(
            <div className='card-rgb'>
                <div style={{backgroundColor:`rgb(${r},${g},${b})`, width:'100vw', height:`55px`}}>
                    <p>rgb({r},{g},{b})</p>
                    <p>{this.rgbToHex(r)+this.rgbToHex(g)+this.rgbToHex(b)}</p>
                </div>
            </div>
        )
        }
}





// exports
export default BoxColor;