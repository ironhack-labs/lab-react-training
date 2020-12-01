import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        likes: 0
    }

    

    likeHandler = () => {
        this.setState((state, props) => ({
            likes: state.likes + 1
        }))
    }

    render() {
        let colors = ['purple','blue','green','yellow','orange','red']
        let random = Math.floor(Math.random() * 6)
        console.log(random);
        return (
            <button style={{backgroundColor: `${colors[random]}`}} onClick={this.likeHandler}>{this.state.likes} Likes</button>
        )
    }
}
