import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        var red = ("0"+this.props.r.toString(16)).slice(-2);
        var green = ("0"+this.props.g.toString(16)).slice(-2);
        var blue = ("0"+this.props.b.toString(16)).slice(-2);
        return (
            <div class="boxcolor" style={{backgroundColor:  "#"+red+green+blue}}>
                <div>rgb({this.props.r},{this.props.g},{this.props.b}) <br /> {"#"+red+green+blue}</div>
            </div>
        )
    }
}
