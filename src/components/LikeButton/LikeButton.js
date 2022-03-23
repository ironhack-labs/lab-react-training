import React, { Component } from 'react';
import './LikeButton.css'

class LikeButton extends Component {
    colors = ['purple','blue','green','yellow','orange','red']
    
    state = {
        likes: 0,
        index: 0
    }

    doLike = () => {
        this.setState({
            likes: this.state.likes + 1,
            index: this.state.index +1,
        })

        if (this.state.index >= 5) {
            this.setState({
                index: 0
            })
        }
    }

    render() {
        return (
            <button onClick={this.doLike} style={{backgroundColor: `${this.colors[this.state.index]}`}}>{this.state.likes === 1 ? this.state.likes + " Like" : this.state.likes + " Likes"}</button>
        )
    }
}

export default LikeButton;