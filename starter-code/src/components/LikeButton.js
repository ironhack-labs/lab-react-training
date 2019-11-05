import React, { Component } from 'react';

class LikeButton extends Component {
    state = {
        number: 0,
        color: 'black'
    }

    addLike = () => {
        const colors = ['purple','blue','green','yellow','orange','red'];    
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        this.setState ({
            number: this.state.number + 1,
            color: randomColor
        })
    }

    render () {
        return(
            <div>
                <button onClick={this.addLike} style={{backgroundColor: this.state.color, color: 'white'}} >
                    {this.state.number} Likes
                </button>
            </div>
        )
    }
}

export default LikeButton;