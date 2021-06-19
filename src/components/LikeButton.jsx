import React, { Component } from 'react'

class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonText: '0 Likes',
            likes: 0
        };
      }

    render() {
        return (
            <div className="likeButton">
            <button onClick={() => this.like()}>{this.state.buttonText}</button>
        </div>
        );
    }

    like() {
        this.state.likes++;
        if(this.state.likes===1) this.setState({buttonText:`${this.state.likes} Like`});
        else this.setState({buttonText:`${this.state.likes} Likes`});

        console.log(this.state.buttonText);
    }
}

export default LikeButton;