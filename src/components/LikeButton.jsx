import React, { Component } from 'react'

export class LikeButton extends Component {

    bgColors = ['purple','blue','green','yellow','orange','red'];

    state = {
        likes: 0,
        bgColor : 'white',
    };

    handleLikes = () => {
        let colorIndex = this.state.likes;
        this.setState({likes : this.state.likes + 1, bgColor: this.bgColors[colorIndex]});
    };

    render() {
        console.log("Likes button clicked");

        return (
            <div>
            <button             
            style = {{
                backgroundColor: this.state.bgColor
            }}
             onClick = {this.handleLikes}>
                {this.state.likes} likes 
                </button>
            </div>
        )
    }
}

export default LikeButton
