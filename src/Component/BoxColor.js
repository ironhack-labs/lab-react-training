import React, { Component } from "react";

class BoxColor extends Component{
    render(){
        const { r, g, b } = this.props;
        const colorStyle ={
            backgroundColor:  [`rgb(${r}, ${g}, ${b})`]
        }
        return(
            <div className="box-color" style={colorStyle} >
                <p>rgb({r},{g},{b})</p>
            </div>
        )
    }

}

export default BoxColor;