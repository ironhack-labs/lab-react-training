import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        function rgbToHex(r, g, b) {
            return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
          }
          //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
        return (
            <div className="box d-flex text-center flex-column" style={{backgroundColor: "rgb("+this.props.r+","+this.props.g+","+this.props.b+")" }}>
                <h5>rgb({this.props.r},{this.props.g},{this.props.b})</h5><br />
                <h5>#{rgbToHex(this.props.r, this.props.g, this.props.b)}</h5>
            </div>
        )
    }
}
