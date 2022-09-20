import React, { Component } from 'react'
import './LikeButton.css';

class LikeButton extends Component {
    state = {
        count: 0,
        color: 'red',
        text: 'Likes'
    }

    randomColor = () => {
        const colorsArr = ['purple','blue','green','yellow','orange','red'];
        let randomN = Math.floor(Math.random() * (5 - 0 + 1) + 0);
        this.setState({color: colorsArr[randomN]})
    }

    changeText = () => { 
        this.setState((prevState) => {
            const newText = prevState.count === 0 ? 'Like' : 'Likes'
            return {
              text: newText
            }
        })
    }

    add = (event) => {
        const numberToIncrement = Number(event.target.value) || 1
        this.randomColor()
        this.changeText()
        this.setState((prevState) => {
            return {
              count: prevState.count + numberToIncrement
            }
        })
    }

    render() {
        const btnStyle = {
            backgroundColor: this.state.color
        };

        return (
            <div className="like-container">
                <button style={btnStyle} onClick={this.add}>{this.state.count} {this.state.text}</button>
            </div>
        )
    }
}

export default LikeButton;