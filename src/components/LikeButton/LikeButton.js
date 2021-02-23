import React, { Component } from 'react'
import './LikeButton.css'

export default class LikeButton extends Component {
    state = {
        likes: 0,
    }
    like = () => {
        let newCount = this.state.likes + 1
        this.setState({likes: newCount})
    }
    render() {
        const likes = this.state.likes
        if (likes === 0) {
            return (
                <div>
                  <button
                    className="button"
                    onClick={this.like}
                  >
                    <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>{" "}
                    {likes} Likes
                  </button>
                </div>
              );
        }
        if (likes === 1) {
            return (
              <div>
                <button className="button" onClick={this.like}>
                  <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
                  {likes} Like
                </button>
              </div>
            );
          }
          if (likes > 1) {
            return (
              <div>
                <button className="button" onClick={this.like}>
                  <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
                  {likes} Likes
                </button>
              </div>
            );
          }
    }
}


