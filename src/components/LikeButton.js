import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
    state = {
        totalLikes: 0,
        backgroundColor: 'purple'
    }

    updateButton() {
        const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]

        this.setState({
            totalLikes: this.state.totalLikes + 1,
            backgroundColor: randomColor
        })
    }

    render() {
        return (
            <button onClick={() => this.updateButton()} style={{backgroundColor: this.state.backgroundColor}}>{this.state.totalLikes} Likes</button>
        )
    }
}

export default LikeButton;