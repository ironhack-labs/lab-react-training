import { Component } from 'react';
import './LikeButton.css'

class LikeButton extends Component {
  state = {
    likes: 0,
    color: '#565857',
  };

  countLikes = () => {
    const countLikes = this.state.likes;
    const colorLikes = [
      '#DC7F9B',
      '#F7A1C4',
      '#E0B7B7',
      '#94BFA7B',
      '#69DC9E',
      '#FFD3BA',
      '#805D93',
      '#169873',
      '#9A8C98',
    ];
  
    this.setState({
      likes: countLikes + 1,
      color: colorLikes[Math.floor(Math.random() * colorLikes.length)],
    });
  };
//¿Dónde puedo meter condicional 'if' para que renderice "1 like" en lugar de "1 likes"?
  render() {
  
    return (
        
      <div className="buttonContainer">
        <button
          style={{
            backgroundColor: this.state.color
          }}
          className="myButton"
          type="button"
          onClick={this.countLikes}
          name="likes"
          value="likes"
        >
          {this.state.likes} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
