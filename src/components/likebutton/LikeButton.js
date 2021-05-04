import React, { Component } from 'react';
import "./LikeButton.css"

class LikeButton extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            value: 0,
            color: 'purple'
        }

        this.colors = ['purple','blue','green','yellow','orange','red'];
    }
    changeButton(){
        this.addLikes();
        this.changeButtonColor(this.state.color);
    }
    addLikes(){
        this.setState({value: this.state.value + 1});
    }
    changeButtonColor(currentColor){
        let index = this.colors.indexOf(currentColor) + 1;
        if(index > this.colors.length - 1 ) index = 0;
        this.setState({color: this.colors[index]})
    }
    render() {
        return (
            <button onClick={() => this.changeButton()} style={{backgroundColor:this.state.color}}>{this.state.value} Likes</button>
        );
    }
}

export default LikeButton;

