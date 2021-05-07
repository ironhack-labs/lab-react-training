import React from 'react';
 
class LikeButton extends React.Component {
  state = {
    count: 0
  };
 
  handleIncrementClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };
 
  render() {
    return (
        <button onClick={this.handleIncrementClick}>{this.state.count} Likes</button>
    );
  }
}
 
export default LikeButton;