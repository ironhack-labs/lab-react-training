import React, { Component } from 'react'

class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0,
            color: 'purple'
        }
    }
    addLike = () => {
        this.setState((state) => ({likes: state.likes++}), this.changeColor)
    }
    changeColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red']
        const colorIndex = Math.floor(Math.random()*6)
        this.setState((state) => ({color: colors[colorIndex]}))
    }
    render() {
        return (
            <button 
                className='like-button' 
                onClick={this.addLike} 
                style={{backgroundColor: this.state.color}}
            >{this.state.likes} Likes</button>
        )
    }
}

export default LikeButton
