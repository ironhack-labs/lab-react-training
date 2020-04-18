import React, { Component } from 'react'

class LikeButton extends Component{
    state = {
        likes : 0,
    }
    addLike = () => {
        this.setState({
            likes: this.state.likes + 1,
        });
      
        };
    render(){
        console.log(this.addLike)
        return(            
         <button onClick={this.addLike}>{this.state.likes} Like</button>
        )
    }
}
export default LikeButton; 