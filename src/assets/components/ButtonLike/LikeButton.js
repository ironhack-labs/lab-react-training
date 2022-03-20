import React, {Component} from "react";

// const color = ['purple','blue','green','yellow','orange','red'];

class LikeButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: props.initialLike,
    }
  }

  incrementLikes = () => {
    this.setState({
      count: this.state.count + 1,
  
    })  
  }
  // randomColor = () => {
  //   const color = ['purple','blue','green','yellow','orange','red']
  //   this.props.type = Math.random(color)
  //  }
  
  render() {
    return (
      <div>
        <button 
        className="btn-size" 
        onClick={this.incrementLikes}
        >{this.state.count} Likes</button>
      </div>
    )
  }
}

export default LikeButton;