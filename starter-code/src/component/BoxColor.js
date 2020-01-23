import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {

        let red= ("0" +this.props.r.toString(16)).slice(-2)
        let green = ("0" + this.props.g.toString(16)).slice(-2)
        let blue = ("0" + this.props.b.toString(16)).slice(-2)

        
                
        let colorCode="#"+red+green+blue

        

        return (
            <div id="greetings" style={{backgroundColor: colorCode, color: "white"}}> 
            <h2>rgb ({this.props.r}, {this.props.g}, {this.props.b})</h2>
                <h2>{colorCode}</h2>
            </div>
        )
    }
}
