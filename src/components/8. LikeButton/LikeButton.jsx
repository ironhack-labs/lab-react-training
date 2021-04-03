import { Component } from 'react';
import './LikeButton.css';

export default class LikeButton extends Component {
  state = {
    likes: 0,
    i: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };
  changerColor = () => {
    let i = this.state.i;
    i < this.state.colors.length - 1 ? i++ : (i = 0);
    const like = this.state.likes + 1;
    this.setState({ likes: like, i: i });
  };
  
  render() {
    const colorStyle = {
      backgroundColor: this.state.colors[this.state.i],
    };
    return (
      <div>
        <button
          style={colorStyle}
          onClick={this.changerColor}
          className=" btn "
        >
          {this.state.likes} Likes
        </button>
      </div>
    );
  }
}
