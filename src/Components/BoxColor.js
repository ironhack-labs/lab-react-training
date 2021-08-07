import React, { Component } from 'react'
import './BoxColor.css'

class BoxColor extends Component {
    render(){

        const backgroundColour = `rgb(${this.props.r},${this.props.g},${this.props.b})` 

        const divStyle = {
            height: "100px",
            backgroundColor: `${backgroundColour}`,
            width: "1330px"                        
        }

        return(
            <>
                <div className = 'main-boxcolor' style={divStyle}> {backgroundColour} </div>
            </>
        )
    }
}

export default BoxColor