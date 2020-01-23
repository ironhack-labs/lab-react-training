import React, { Component } from 'react'

export default class  extends Component {
    render() {

      //console.log(this.props.r,this.props.g,this.props)
      //let colorStr = `rgb(${this.props.r},${this.props.g},${this.props.b})`;

      let color = "";
      if (this.props.r ===255) color = "white"
      else color = "black";


        const mystyle1 = {
            color: `${color}`,
            textAlign: "center",
            textAlign: "center",
            backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})` ,
            padding: "5px",
            fontFamily: "Arial",
            border: "2px solid black",
            margin: "10px 400px 2px 10px"
          };

  
         return (
            <div style={mystyle1}>
              <p >rgb({this.props.r},{this.props.g},{this.props.b})</p>
            </div>
        )
    }
}
