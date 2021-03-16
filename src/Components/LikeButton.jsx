import React, { Component } from "react";
import '../styles/LikeButton.css'

export class LikeButton extends Component {
    
    state = {
        counter: 0
    }

    incrementLike = () => {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        const colorArr = ['purple','blue','green','yellow','orange','red']
        const styleDiv = { 
            backgroundColor: colorArr[Math.floor(Math.random()*colorArr.length)]
        }

        return (
            <div>
                <button className="LikeButton" onClick={this.incrementLike} style={styleDiv} >{this.state.counter} Likes </button>
            </div>
        )
    }
}

export default LikeButton
