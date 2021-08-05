import { Component } from 'react';
import '../App.css';

class LikeButton extends Component {
    state = {
        likes: 0,
        className: 'button',
    }

    handleClick = () => {
        let newLikes = this.state.likes;
        newLikes += 1;
        let colors = ['purple','blue','green','yellow','orange','red'];
        let newClassName = colors[Math.floor(colors.length * Math.random())];
        this.setState({
            likes: newLikes,
            className: 'button button-'+newClassName,
        })
    }
    render() {
        return (
            <button className={this.state.className} onClick={this.handleClick}>{this.state.likes} Likes</button>
        )
    }
}

export default LikeButton;