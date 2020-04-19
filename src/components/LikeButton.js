import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {
    state = {
        counter: 0,
        styleColor: {
            backgroundColor: 'purple'
        }
    };

    incrementLike = () => {
        const colors = ['purple','blue','green','yellow','orange','red'];
        const colorIndex = (this.state.counter + 1) % colors.length;

        this.setState({
            counter: this.state.counter + 1,
            styleColor: {
                backgroundColor: colors[colorIndex]
            }
        });
    }

    render() {
        const { counter, styleColor } = this.state;

        return (
            <button className='LikeButton' style={styleColor} onClick={this.incrementLike}>{counter} Likes</button>
        );
    }
}

export default LikeButton;