import './index.css';
import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0,
        color: '',
    };

    handleColor = () => {
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

        const currentColorIndex = colors.indexOf(this.state.color);
        const nextIndexColor = (currentColorIndex + 1) % colors.length;

        return colors[nextIndexColor];
    };

    handleLikesCountAndColor = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
                color: this.handleColor(),
            };
        });
    };

    render() {
        return (
            <div className="LikeButton">
                <button
                    style={{ color: 'white', backgroundColor: this.state.color }}
                    onClick={this.handleLikesCountAndColor}
                >
                    {' '}
                    {this.state.count} Likes
                </button>
            </div>
        );
    }
}

export default LikeButton;