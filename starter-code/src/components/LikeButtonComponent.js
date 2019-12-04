import React, {Component} from 'react';

import  { LikesBut } from '../styles/components';

export default class LikeButtonComponent extends Component {
    state =  {
        likes: 0
    };
    addLike = ()  => {
        this.setState({likes: this.state.likes + 1});
    };

    render(){
        return (
            <LikesBut onClick = {() => this.addLike()}>
            {this.state.likes} Likes
            </LikesBut>
        );
    }
}






