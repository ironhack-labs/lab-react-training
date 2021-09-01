import React from 'react';
import './LikeButton.css';

export default class LikeButton extends React.Component {
  state = {
    count: 0
  }

  incrementClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  };

  render() {
    return(
      <div className='LikeButton'>
        <button onClick={this.incrementClick}>{this.state.count}</button>
      </div>
    )
  }
}