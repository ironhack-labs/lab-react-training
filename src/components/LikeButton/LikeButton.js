import './LikeButton.css'
import React, { Component } from 'react'

class LikeButton extends Component {

   state = {
        count: 0,
        color: 'purple',
    }
    colors = ['purple','blue','green','yellow','orange','red']

    increment() {
        this.setState({
            count: this.state.count + 1,
            color: this.colors[Math.floor((Math.random() * this.colors.length))]
        })
    }

    render() {
        return(
            <div className='like-button-container'>
                <button className='like-button' onClick={ () => this.increment() } style={{ backgroundColor: this.state.color }}> {this.state.count} Likes</button>
            </div>
        )
    }
}

export default LikeButton