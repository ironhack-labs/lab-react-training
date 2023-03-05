import "./index.css"
import React, { Component } from 'react';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          color: "white",
        };
      }

      handleIncrementClick = () => {
        this.setState({
          count: this.state.count + 1,
        });
      };




    render() {
        return (
            <div className="LikeButton">
          <button className="Likebtn" onClick={this.handleIncrementClick}>{this.state.count} Likes</button>  
            </div>
        );
    }
}

export default LikeButton;