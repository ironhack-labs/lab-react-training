import React, { Component } from 'react'
import './LikeButton.css'

export default class LikeButton extends Component {

    state = {
        likeCounter: 0,
        style: {
            backgroundColor: 'white'
        }
    }

    likesHandler = () => {
        const colorArr = ['purple','blue','green','yellow','orange','red']
        const random = Math.floor(Math.random() * colorArr.length)
        const randomColor = {
            backgroundColor: colorArr[random]
        }

        this.setState( (state, props) => ({
            likeCounter: state.likeCounter + 1,
            style: randomColor
        }))
    }



    render() {
        return (
            <div className="likeButtonContainer">
                <button onClick={this.likesHandler} style={this.state.style}> { this.state.likeCounter === 1 ? this.state.likeCounter + ' Like' : this.state.likeCounter + ' Likes'}</button>
            </div>
        )
    }
}
