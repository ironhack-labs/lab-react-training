import React from "react";
import './LikeButton.css';

//let buttonColors = ['purple','blue','green','yellow','orange','red']

class LikeButton extends React.Component{
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
    
      decreaseLikes = () => {
        this.setState({
          count: this.state.count - 1,
    
        })  
      }

      render() {
        return (
          <div>
            <button 
            className="btn-size" 
            onClick={this.incrementLikes}
            >
            +
            </button>
            <h4> {this.state.count}Likes </h4> 
            <button 
            className="btn-size" 
            onClick={this.decreaseLikes}
            >
            -
            </button>
          </div>
        )
      }
}

export default LikeButton;