import "./LikeButton.css"
import React, { Component } from 'react'

export class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }
        add = () => {
            this.setState((state) => ({likes: state.likes++}))
        }
    
    render() {
        return (
            <div>
                <button className="buttons" onClick={this.add}>{this.state.likes} Likes</button>
            </div>
        )
    }
}

export default LikeButton

