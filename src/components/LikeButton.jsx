import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
    constructor() {
        super()
        this.colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        this.state = {
            likes: 0,
            color: this.colors[Math.floor(Math.random() * 5)]
        }
    }

    clickLike() {
        const randomNum = Math.floor(Math.random() * 5);
        this.setState({
            likes: this.state.likes + 1,
            color: this.colors[randomNum]
        });
    }

    render() {
        return (
           
                <button className="ButtonLike" style={{ backgroundColor: `${this.state.color}` }} onClick={() => this.clickLike()}>{this.state.likes} Likes</button>
           
        );
    }
}


export default LikeButton