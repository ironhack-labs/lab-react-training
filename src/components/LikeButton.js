import React, { Component } from 'react'

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0,
            color: 'pink',
            text: 'Like'
        }
    }

    sum = () => {
        this.setState({
            clicks: this.state.clicks + 1,
            text: this.state.clicks > 0 ? 'Likes' : 'Like'
        })
    }

    color = () => {
        const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        this.setState({
            color: colorArray[Math.floor(Math.random() * colorArray.length)]
        })
    }

    render() {
        const divStyle = {
            background: this.state.color,
        }
        return (
            <div className="buttonsToLike">
                <button style={divStyle} className="likeButton" onClick={() => {
                    this.sum();
                    this.color();}}>
                    {this.state.clicks} {this.state.text}
                </button>
            </div>
        )
    }
}

