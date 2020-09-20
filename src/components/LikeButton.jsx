import React, {Component} from 'react';
import './LikeButton.css';

class LikeButton extends Component {
   constructor(props) {
       super(props);
       this.state = {
           likes: 0,
           backgroundColor: 'purple'
       };
   }

    getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

   handleClick() {
       this.setState({
           likes: ++this.state.likes,
           backgroundColor: this.getRandomColor()
        })
   }

   render() {
       return (<button style={{backgroundColor: this.state.backgroundColor}} onClick={() => this.handleClick()} class="LikeButton">{this.state.likes} Likes</button>)
   }
}

export default LikeButton