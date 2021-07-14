import React, { Component } from 'react'
import "../css/idCard.css"
export default class LikeButton extends Component {

    state = {
        counter: 0,
        liked: false,
        color: "magenta"
    }

    clickHandler = () => {
        let colors = ['purple','blue','green','yellow','orange','red']
        let newColor = colors[Math.floor(Math.random()*colors.length)]
        this.setState((state) => ({
                counter: state.counter + 1,
                color: newColor
            }));
    }

    likeHandler = () => {
        this.setState(state => ({
            liked: !state.liked
        }))
    };

    



    render() {
        console.log(this.state)
        const styling = {backgroundColor: this.state.color}
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button style = {styling} onClick={this.clickHandler}> Click me 🌶</button>
            </div>
        )}}