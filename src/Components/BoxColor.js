import React, { Component } from 'react'

class BoxColor extends Component {
    render(){

        const backgroundColour = `rgb(${this.props.r},${this.props.g},${this.props.b})` 

        const divStyle = {
            height: "150px",
            backgroundColor: `${backgroundColour}`,
            width: "100vw"                        
        }

        return(
            <>
                <div className = 'm-3 p-5' style={divStyle}> {backgroundColour} </div>
            </>
        )
    }
}

export default BoxColor