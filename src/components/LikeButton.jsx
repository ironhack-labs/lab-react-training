import React, { Component } from 'react'

 class LikeButton extends Component {
     state = {
         counter: 0,
     }
     buttonColors=['purple','blue','green','yellow','orange','red']
     handleClick = () => {
         this.setState({counter: this.state.counter +1})
     }
    render() {
        return (
            <div>
                <button style={{
                    backgroundColor: this.buttonColors[this.state.counter%6]
                }} onClick={this.handleClick}>{this.state.counter} likes</button>
            </div>
        )
    }
}

export default LikeButton
