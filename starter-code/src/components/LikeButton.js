import React, {Component} from 'react';

class LikeButton extends Component {

    state ={likes:0}

    likea = () => {
        let {likes} = this.state;
        likes = likes+1;
        this.setState({likes});
      }
      
      render(){

        let color = (n) =>
        n === 0 ? 'purple'
    :   n === 1? 'blue'
    :   n === 2? 'green'
    :   n === 3? 'yellow'
    :   n === 4 ? 'orange'
    :  'red'
          return(
            <div className = 'like' >
            <button onClick={this.likea} 
            style={{backgroundColor: color(this.state.likes)}}>  {this.state.likes} Likes</button>
            </div>
          )
      }      
}
export default LikeButton;