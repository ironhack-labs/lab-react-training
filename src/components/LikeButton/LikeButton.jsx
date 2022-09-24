import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
  state = { // Como es un atributo no ponemos this.state, eso solo sería si está en el constructor.
    likesCount: 0,
    title: 'Likes',
    backgroundColor: 'purple'
  };

  addLike = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const like = 1;

    this.setState({ likesCount: this.state.likesCount + like});

    if (this.state.likesCount === 0) {
      this.setState({ title: 'Like' });
    } else {
      this.setState({ title: 'Likes' });
    }

    this.setState({ backgroundColor: colors[colors.indexOf(this.state.backgroundColor) + 1] }); // Si es el ultimo debería volver a cero el index
  };

  render() {
    const { likesCount, title } = this.state;

    return (
      <button style={{backgroundColor: this.state.backgroundColor}} className="Like-button" onClick={this.addLike}>
        {likesCount} {title}
      </button>
    );
  }
}

export default LikeButton;