import React, { Component } from 'react'

const arrayColor = ['purple','blue','green','yellow','orange','red'];



class LikeButton extends Component {

    state = {
        counterValue : 0,
        colorValue : `${arrayColor[Math.floor(Math.random()*(arrayColor.length-1))]}`,
    };

    increment = () => {
        // console.log("je suis cliqué");
        this.setState({
          counterValue: this.state.counterValue + 1,
          colorValue: `${arrayColor[Math.floor(Math.random()*(arrayColor.length-1))]}`
        });
      };

    render() {
        const divStyle = {
            border: '1px solid black',
            backgroundColor: this.state.colorValue
        };
        return (
            <div id="like-btn">
                <button onClick={this.increment} style={divStyle}>{this.state.counterValue}Likes</button>
            </div>
        )
    }
}

export default LikeButton;