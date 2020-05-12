import React, { Component } from "react";

export default class Carousel extends Component {

    state = {
        position: 0
    }

    constructor() {
        super();
        this.leftClicked = this.leftClicked.bind(this);
        this.rightClicked = this.rightClicked.bind(this);
    }

    // change = +1 / -1
    updatePosition = (change) => {
        let newPos = this.state.position;
        if (change === 1) {
            newPos++;
        } else {
            newPos --;
        }
        if (newPos >= this.props.imgs.length) newPos = 0;
        if (newPos < 0) newPos = this.props.imgs.length - 1;
        this.setState({ position: newPos });
    }

    leftClicked = () => {
        this.updatePosition(-1);
    }

    rightClicked = () => {
        this.updatePosition(+1);
    }

    render() {
        const imgStyle = {float: "left", width: 200};
        const btnStyle = {float: "left", "margin": "170px 10px 0px 10px"};

        return (
            <div>
                <button onClick={this.leftClicked} style={btnStyle}>Left</button>
                <img src={this.props.imgs[this.state.position]} alt={this.state.position} style={imgStyle} />
                <button onClick={this.rightClicked} style={btnStyle}>Right</button>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }

}