import React from 'react';
import './Like.css';

export default class Like extends React.Component {
    constructor() {
        super()
        this.colors = ['purple','blue','green','yellow','orange','red']
        this.state = {
            likes: 0,
            color: this.colors[0]
        }
    }

    clickLike() {
        const randomNum = Math.floor(Math.random() * 5);
        console.log(randomNum);
        this.setState({
            likes: this.state.likes + 1,
            color: this.colors[randomNum]
        });
    }

    render() {
        return (
            <button className="buttonLike" style={{backgroundColor: `${this.state.color}`}} onClick={() => this.clickLike()}>{this.state.likes} Likes</button>
        );
    }
}