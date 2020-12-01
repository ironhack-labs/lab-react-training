import React, { Component } from 'react'

export default class LikeButton extends Component {

    state = {
        clickCount : 0,
        colorIndex : 0,
        colors: ['purple','blue','green','yellow','orange','red']
    }

    clickHandler = () => {
        
        if(this.state.colorIndex >=5) {
            this.state.colorIndex = 0
        }
        
        this.setState({
            clickCount: this.state.clickCount + 1,
            colorIndex: this.state.colorIndex + 1
        })
        
    }

    render() {
        return (
            <div className="like-button">
                <button onClick={this.clickHandler} style= {{backgroundColor: this.state.colors[this.state.colorIndex]}}>{this.state.clickCount} Like</button>
            </div>
        )
    }
}

// colors= [];
// for(let i = 0; i < colors.length; i++) {
//     this.setState({
//         clickCount: this.state.clickCount +1,
//         ba
//     })
// }