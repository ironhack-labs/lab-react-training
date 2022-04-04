import React,  { Component } from 'react';

class LikeButton extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialLike,
        }
    }

    incrementLikes = () =>{
        this.setState({
       count: this.state.count +1
        })
    }
    render(){
        return (
            <div>
            <button className='btn-sizing' onClick={this.incrementLikes}>{this.state.count}</button>

            </div>
        )
    }
};

export default LikeButton;