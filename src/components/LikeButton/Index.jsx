import './index.css';
import { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <button className="LikeButton" onClick={this.handleClick}>
        {this.state.count} Likes
      </button>
    );
  }
}

export default LikeButton;
