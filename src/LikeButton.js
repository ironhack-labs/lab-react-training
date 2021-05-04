import React from 'react';
import './index.css'

class LikeButton extends React.Component {
  state = {
    likes: 0,
    color: 'purple'
  }
  likeHandler = () => {
    const colors = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'];
    this.setState(state => {
      return {
        likes: state.likes + 1,
        color: colors[state.likes % 6]
      }
    })
  }

  render() {
    return (
      <button
        style={ { backgroundColor: this.state.color, padding: "1rem 2rem" } }
        onClick={ this.likeHandler }>
        { this.state.likes } Likes
      </button>
    )
  }
}

export default LikeButton