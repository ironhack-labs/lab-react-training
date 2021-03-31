import React, { Component } from 'react'
let colors = ["#581845", "#900C3F", "#C70039", "#FF5733", "#FFC300", "#DAF7A6"]

export default class LikeButton extends Component {
    
    state = {
        likes: 0,
        activeColor: [colors[0]]
    }

    addLikes = () => {
        this.setState({likes: this.state.likes + 1, activeColor: [colors[Math.floor(Math.random() * 6)]]})
    }

    render() {
        return (
            <div className="LikeButton card mb-3">
                <div className="row p-3">
                    <div className="col">
                            <button className="btnLike" style={{backgroundColor: this.state.activeColor}} onClick={this.addLikes}>{this.state.likes} likes</button>
                    </div>
                </div>
            </div>
        )
    }
}