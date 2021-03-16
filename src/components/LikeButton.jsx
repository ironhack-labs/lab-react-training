import React, { Component } from 'react'

class LikeButton extends Component {
    state = {
       counter: 1, 
    };

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 1});
    }
    render() {
        return (
            <div>
   {this.state.counter > 10 && <div>{this.props.black} </div>}      
        <button onClick={this.handleIncrement}>
                {this.state.counter} Likes</button>
  
            </div>
        )
    }
}

export default LikeButton;
