import './LikeButton.css';
import React, {Component} from 'react';

class LikeButton extends Component {
    state = {
        count: 0,
        color: 'grey'
    };

    likes = 'likes';
    colors = ['purple','blue','green','yellow','orange','red'];

    increment() {
        this.setState({
            count: this.state.count + 1,
            color: this.colors[Math.floor(Math.random() * this.colors.length)]
        });
    }

    render(){
        if(this.state.count === 1){
            this.likes = 'like'
        } else {
            this.likes = 'likes'
        }

        return (
            <button className="mt-3 mb-3" style={{ backgroundColor: this.state.color }} onClick={() => {this.increment()}}>{this.state.count} {this.likes}</button>
        )
    };
};

export default LikeButton;

