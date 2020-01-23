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

          let anrede = "";
          if (this.props.lang ==="de")  anrede= "Hallo "
          else anrede = "Bonjour "

        return (
            <div style={mystyle1}>
              <p >{anrede} {this.props.children}</p>
              
            </div>
        )
    }
}
