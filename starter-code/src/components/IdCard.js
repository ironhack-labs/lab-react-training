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

        const mystyle2 = {
            display: "flex",
            flexDirection: "column",
            color: "black",
            backgroundColor: "white",
            padding: "0px 5px",
            fontFamily: "Arial",
            margin: 0
          };

          const imgStyle = {
            height : "128px",
            width : "128px"
          };

          const pStyle = {
                padding: "0px",
                margin: "3px"
          };

          const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'   };

        return (
            <div style={mystyle1}>
                <img  style={imgStyle} src={this.props.picture} alt="Picture"/>
            
            <div style={mystyle2}>
                <p style={pStyle}> <b>First name: </b> {this.props.firstName}</p>
                <p style={pStyle}> <b>Last name: </b>{this.props.lastName}</p>
                <p style={pStyle}> <b>Gender: </b>{this.props.gender}</p>
                <p style={pStyle}> <b>Height: </b>{this.props.height}m</p>
                <p style={pStyle}> <b>Birth: </b>{this.props.birth.toLocaleDateString('en-GB', options)}</p>
            </div>
            </div>
        )
    }
}
