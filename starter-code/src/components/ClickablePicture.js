import React, { Component } from 'react';
import { ClickablePicture } from '../styles/components';

export default class ClickablePictureComponent extends Component {
    state = {
        img: false
    };

    changeImg = () => {
        this.setState(prevState => ({
            img: !prevState.img
        }));
    }

    render() {
        return(
            <ClickablePicture onClick={this.changeImg}>
                <img src={this.state.img ? "/img/persons/maxence.png" : "/img/persons/maxence-glasses.png"} alt="Profile"/>
            </ClickablePicture>
        )
    }

} 