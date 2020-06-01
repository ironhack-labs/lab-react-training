import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
    state = {
        likeCount : 0,
        backColors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
        backColorIndex: 0
    }

    clickHandler = () => {

        // this just changes the state
        // this.state.backColor = 'blue';

        // this changes the state AND renders the DOM dynamically
        // => check reconciliation algorithm
        if (this.state.backColorIndex < this.state.backColors.length -1 ) {
            this.setState({
                backColorIndex: this.state.backColorIndex + 1
            })
        } else {
            this.setState({
                backColorIndex: 0
            })
        }


        this.setState({
            likeCount: this.state.likeCount + 1,
        });
    }

    render () {
        return <button className="likeButton" style={{backgroundColor: this.state.backColors[this.state.backColorIndex] }}onClick={this.clickHandler}>{this.state.likeCount} Likes</button>
    }
}


export default LikeButton;