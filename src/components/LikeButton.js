import React, { Component } from 'react';
import styled from 'styled-components';

class LikeButton extends Component {
    state = {
        likes: 0,
        backColor: 'purple'
    }

    clickHandler = () => {
        const colors = ['purple','blue','green','yellow','orange','red'];
        let newColor;

        for(let i = 0; i < colors.length; i++){
            if(this.state.backColor === colors[i]){
                i < colors.length - 1 ?  newColor = colors[i+1] : newColor = colors[0];
                // if(i < colors.length - 1){
                //     newColor = colors[i+1]
                // } else {
                //     newColor = colors[0]
                // }
            }
        }

        this.setState({
            likes: this.state.likes + 1,
            backColor: newColor
        })
    };

    render(){
        const Button = styled.button`
            background-color: ${this.state.backColor}
        `
        return(
            <Button className="like-button" onClick={this.clickHandler}>{this.state.likes} Likes</Button>
        )
    }
}

export default LikeButton;