import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        likes: 0,
        color: ['purple','blue','green','yellow','orange','red'],
        selectedColor: 'blue'
    }

    addLikes = () => {
        let countLikes= this.state.likes + 1
        console.log(countLikes)
        this.setState({
            likes: countLikes
        })
    }

    render() {
        return (
            <div>
                <button style={{backgroundColor: `${this.state.selectedColor}`}} onClick={this.addLikes}>{this.state.likes} Likes</button>
            </div>
        )
    }
}
