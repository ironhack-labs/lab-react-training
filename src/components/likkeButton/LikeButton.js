import React, {Component} from 'react';
import './index.css';

class LikeButton extends Component {

  background = ['purple','blue','green','yellow','orange','red'];

  state = {
    count:0,
  };

  _addLike = () => {
    this.setState({
      count: this.state.count +1
    })
  };

  render() {
    return (
      <div className={'likeButton'}>
        <button onClick={this._addLike} style={{'background': this.background[this.state.count % 6]}}>{this.state.count} Likes</button>
      </div>
    );
  }
}

export default LikeButton;