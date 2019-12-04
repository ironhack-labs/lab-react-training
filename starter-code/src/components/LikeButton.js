import React, { Component } from "react";
import { LaikButon } from "../styles/components";

export default class LikeButton extends Component {
  state = {
    likes: 0
  };
  sumLikes = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  render() {
    return (
      <LaikButon onClick={() => this.sumLikes()}>
        {this.state.likes} Likes
      </LaikButon>
    );
  }
}
