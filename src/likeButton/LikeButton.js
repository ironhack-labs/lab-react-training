import React, {Component} from 'react';
import './LikeButton.css';

class LikeButton extends Component {
    state = {
        count: 0
    };

    handleIncrementClick = () => {
        this.setState({
          count: this.state.count + 1
        });
    };

    render () {
        return (
            <div className="like-button">
                <button onClick={this.handleIncrementClick}>{this.state.count} Likes</button>
            </div>
        )
    }
}

export default LikeButton;

