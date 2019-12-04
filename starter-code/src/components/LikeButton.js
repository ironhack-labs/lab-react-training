import React, { Component } from 'react';
import { LikeButton } from '../styles/components';

export default class LikeButtonComponent extends Component {
    state = {
        likes: 0
    };

    sumLikes = () => {
        let likes = this.state.likes;
        likes++;
        this.setState({
            likes
        });
    };
    
    render () {
        return (
            <LikeButton onClick={this.sumLikes}>
                {this.state.likes} Likes
            </LikeButton>
        );
    }
};