import React, { Component } from 'react'

export default class LikeButton extends Component {

    state = {
        likes: 0,
        clicks: 0
    }
    colors = ['purple','blue','green','yellow','orange','red'];
    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
            clicks: this.state.clicks < this.colors.length - 1 ? this.state.clicks + 1 : 0
        })
    }
    render() {
        let styles = {
            color: 'white',
            background: this.colors[this.state.clicks]
        }
        return (
            <div>
                <button style={styles} onClick={this.handleLikes}> {this.state.likes}Likes</button>

            </div>
        )
    }
}
