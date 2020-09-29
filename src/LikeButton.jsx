import React from 'react';

class LikeButton extends React.Component {
  state = {
    likes: 0,
    selectedColor: 0
  }

  addLike = () => {
    let newColor = this.state.selectedColor + 1;
    if (newColor > 5) {
      newColor = 0
    }
    this.setState((state) => ({
      likes: state.likes++,
      selectedColor: newColor
    }))
  }

  render() {
    const colors = ['purple','blue','green','yellow','orange','red'];
    const {selectedColor, likes} = this.state;
    return(
      <div>
        <button onClick={this.addLike} style={{backgroundColor: colors[selectedColor]}}>
          {likes} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;