import React, { Component } from 'react'

const arrayColor = ['purple','blue','green','yellow','orange','red'];



class LikeButton extends Component {

    // divStyle = {
    //     border: '1px solid black',
    //     backgroundColor: this.state.colorValue
    // };

    state = {
        counterValue : 0,
        colorValue : `${arrayColor[0]}`,
    };


    increment = () => {
        console.log("je suis cliqué");

        this.setState({
          counterValue: this.state.counterValue + 1,
          colorValue: `${arrayColor[Math.floor(Math.random()*(arrayColor.length+1))]}`
        });
      };

    render() {
        return (
            <div>
                <button onClick={this.increment} style={{backgroundColor: `${this.state.colorValue}`}}>{this.state.counterValue}Likes</button>
            </div>
        )
    }
}

export default LikeButton;