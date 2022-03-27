import { Component } from 'react';

const pickRandomBackgroundColor = () => {
    const palette = ['purple','blue','green','yellow','orange','red'];
    const random = Math.floor(Math.random()*6);
    return palette[random];
};

class LikeButton extends Component {
    state = {
        numberOfLikes: 0,
        backgroundColor: pickRandomBackgroundColor()
    };

    onClickBtn = () => {
        this.setState( (previousState) => {
            return { 
                numberOfLikes: previousState.numberOfLikes + 1,
                backgroundColor: pickRandomBackgroundColor()
            };
        });
    }

    render () {
        const btnStyle = {
            backgroundColor: this.state.backgroundColor
        };
        return (<button onClick={this.onClickBtn} style={btnStyle}>{this.state.numberOfLikes} Likes</button>);
    }
}

export default LikeButton; 