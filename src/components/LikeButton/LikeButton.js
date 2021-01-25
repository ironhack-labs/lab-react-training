import React, { Component } from 'react';
import './LikeButton.css';

class LikeButton extends Component {

    state = {
        counter: 0,
        backgroundColor: 'purple'
    }

    changeCounterAndColor = () => {
        let colorArr = ['purple','blue','green','yellow','orange','red'];
        
        let randomColor = colorArr[Math.floor(Math.random() * colorArr.length)]

        this.setState({
            counter: this.state.counter + 1,
            backgroundColor: randomColor
        })
    }

    render() {
        return (
            <div>
                <button style={{backgroundColor: this.state.backgroundColor}} onClick={this.changeCounterAndColor}>{this.state.counter} likes</button>
            </div>
        )
    }
}

export {LikeButton};