import React, { Component } from 'react'
import './LikeButton.css'


class LikeButton extends Component {
    colors = ['purple','blue','green','yellow','orange','red']
    state = {
        likes: 0,
        color: this.colors[0]
    };
    
    // getRandomColor() {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 5)];
    //     }
    //     return color;
    //     }

    handleClick() {
        const randomNum = Math.floor(Math.random() * 5);
      
        this.setState({
            likes: this.state.likes + 1,
            color: this.colors[randomNum]
        });
    }

    render() {
        return (
            <button 
            className="buttonLike" 
            style={{backgroundColor: `${this.state.color}`, color :"white" }} 
            onClick={() => this.handleClick()}> {this.state.likes} Likes</button>
        );
    }
    
}

export default LikeButton
