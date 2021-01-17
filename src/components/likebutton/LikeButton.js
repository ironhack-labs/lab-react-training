import React, { Component } from 'react';
import style from './LikeButton.module.css';

class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: 'purple',
        };
    }

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1
        });

        this.changeBgColor();
    };

    changeBgColor = () => {
        const colors = ['purple','blue','green','yellow','orange','red'];
        const i = colors.indexOf(this.state.color);
        this.setState({
            color: colors[(i + 1) % colors.length]
        });
    }

    render() {
        return (
            <button className={style.btn} onClick={this.handleIncrementClick} style={{backgroundColor: this.state.color}}>{this.state.count} Likes</button>
        );
    }
}

export default LikeButton;