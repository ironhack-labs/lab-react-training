import React from 'react';
import "./LikeButton.css";

export default class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
          likes: 0,
        };
    
        this.addLike = this.addLike.bind(this);
      }
    
      addLike() {
        this.setState((previous) => ({ likes: previous.likes + 1 }));
      }
    
      render() {
        return (
            <button className='LikeButton' onClick={this.addLike}>{this.state.likes} Likes</button>
        );
      }
}