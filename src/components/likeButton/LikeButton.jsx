import React from "react";
import "./LikeButton.css";

export default class LikeButton extends React.Component {

    constructor(){
        super();
        this.state = {
            count: 0,
        };

        this.plusOne = this.plusOne.bind(this);
    }

    plusOne() {
        this.setState((previous) => ({count: previous.count + 1}))
    }

    render() {
        return (
        <button className="LikeButton" onClick={this.plusOne}>{this.state.count} Likes </button>
        );
    }
}