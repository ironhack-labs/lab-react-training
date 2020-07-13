import React, { Component } from 'react'

class LikeButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            style: {
                backgroundColor: "green",
                color: "white"
            }
        }
    }


    addOneLike() {
        const newCount = this.state.count + 1
        const colorsArray = ['purple','blue','green','yellow','orange','red']
        const newColor = colorsArray[Math.floor(Math.random() * colorsArray.length)]

        this.setState({
            count: newCount,
            style: {
                backgroundColor: newColor,
                color: "white"
            }
        })
    }


    render() {
        return (
            <button className="like-button" onClick={() => this.addOneLike()} style={this.state.style}>{this.state.count} Likes</button>
        )
    }
}

export default LikeButton
