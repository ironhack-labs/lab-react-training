import React, {Component} from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {numberLikes: 0};

    // This binding is necessary to make `this` work in the callback
    this.increaseNumLikes = this.increaseNumLikes.bind(this);
  }
   increaseNumLikes() {
    this.setState(prevState => ({
      numberLikes: prevState.numberLikes + 1
    }));
  };

   render() {
      return <button className="likeButton" onClick={this.increaseNumLikes}>{this.state.numberLikes} Likes</button>
   }
}

export default LikeButton;