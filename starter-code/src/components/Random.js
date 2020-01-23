import React, { Component } from 'react'

export default class  extends Component {
    render() {

        const mystyle1 = {
            display: "flex",
            flexDirection: "row",
            color: "black",
            backgroundColor: "white",
            padding: "5px",
            fontFamily: "Arial",
            border: "2px solid black",
            margin: "10px 400px 2px 10px"
          };

  
          let randomNumber = 0;
          randomNumber = Math.floor((Math.random() * this.props.max) + 1);

        return (
            <div style={mystyle1}>
              <p >Random value between {this.props.min} and {this.props.max} => {randomNumber}</p>
            </div>
        )
    }
}
