import React, { Component } from 'react';
import '../assets/css/LikeButton.css'
export default class LikeButton extends Component {

    state = {
        likes: 0,
        i: 0,
        color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    }

    handleChange = () => {
        let i = this.state.i
        i < this.state.color.length - 1
            ? i++ : i = 0;
        const like = this.state.likes + 1;
        this.setState({ likes: like, i: i })
    }

    render() {
        const colorStyle = {
            backgroundColor: this.state.color[this.state.i]
        }
        return (
            <div className='LikeButton'>
                <button style={colorStyle} onClick={this.handleChange}>{this.state.likes}
                    {this.state.likes === 1 ? ' like' : ' likes'}
                </button>
            </div>)
    }
}