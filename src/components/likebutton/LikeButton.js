import React, { Component } from 'react'
import './LikeButton.css'

export class LikeButton extends Component {

    state = {
        color: [],
        counter: 0
    }

    handleCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    handleColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red']
        const randomColor = Math.floor(Math.random() * colors.length)
        this.setState({
            color: colors[randomColor]

        })
    }

    render() {
        return (
            <div>
                <button className='likeButton' style={{background: `${this.state.color}`}} onClick={() => {this.handleCounter(); this.handleColor()}}>{this.state.counter} {(this.state.counter === 1 ) ? 'Like' : 'Likes'}</button>
            </div>
        )
    }
}

export default LikeButton
