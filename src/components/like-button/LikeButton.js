import { Component } from 'react';

class LikeButton extends Component {
    state = {
        likes: 0,
        color: 'blue'
    };
    colors = ['purple','blue','green','yellow','orange','red'];

    onCount = () => {
        this.setState((state) => ({
            likes: state.likes + 1,
            color: this.colors[Math.round(Math.random() * this.colors.length)]
        }))
    }

    render() {
        const { likes, color } = this.state;
        const { className } = this.props;
        return (
            <span style={{backgroundColor: color}} class={`like-btn badge p-2 ${className}`} onClick={() => this.onCount()}>{likes} Like{likes !== 1 && 's'}</span>
        );
    }
}

export default LikeButton;