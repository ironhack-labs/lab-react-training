import React, { Component } from 'react'
import './LikeButton.css'

export default class LikeButton extends Component {
    state ={
        likes: 0,
        background: ['purple','blue','green','yellow','orange','red'],
        counter: 0
    }


    changeButton = () => {
  
        this.setState({
            likes: this.state.likes + 1,
            counter: 
                this.state.counter <= this.state.background.length-2 
                    ? 
                    this.state.counter + 1 
                    : 
                    0
        })
    }


    render() {
        return (
            <div>
                <button 
                    className='button' 
                    onClick={this.changeButton}
                    style={{ backgroundColor: this.state.background[this.state.counter], color: 'white'}}>
                    {this.state.likes} Likes</button>
            </div>
        )
    }
}
