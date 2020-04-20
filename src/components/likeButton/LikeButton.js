import React, {Component} from 'react'
import '../likeButton/LikeButton.css'


class LikeButton extends Component {
  state = {
    likes : 0,
    color : ['purple','blue','green','yellow','orange','red'],
    index : 0
  }

  changeBackground = () => {
    const color = Math.floor(Math.random() * 6);
    return `like-button ${this.state.color[color]}`
  }


  handleLikes = () => {
    let {likes, index} = this.state;
    const checkIndex = index === 6 ? index = 0 : index + 1;
    this.setState({
      likes : likes + 1,
      index : checkIndex
    })
  }

  render(){
    const {likes, color, index} = this.state;

    return(
      <div className="btn-like">
        <button className="like-button" style={{backgroundColor: color[index]}} onClick={this.handleLikes}>{likes} Likes</button>
      </div>

    )
  }
}

export default LikeButton