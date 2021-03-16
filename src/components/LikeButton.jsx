import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LikeButton extends Component {
   
    state = {
        moreLikes: 0
    };

    handleLikes = () => {
        this.setState({moreLikes: this.state.moreLikes + 1}, () => {

        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLikes}>Like {this.state.moreLikes}</button>
            </div>
        )
    }
}

export default LikeButton
