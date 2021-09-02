import React from "react";
import "./Random.css";

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export default class Random extends React.Component {

    render() {
        return (
        <div className="Random randomNumberBox" >
            <p>Random value between {this.props.min} and {this.props.max} => {randomNum(this.props.min, this.props.max)}</p>
        </div>
        );
    }
}