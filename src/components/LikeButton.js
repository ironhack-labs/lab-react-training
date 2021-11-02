import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0
    }

    increaseCounter = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    };

    render() {
        return(
            <button className='like-button' onClick={this.increaseCounter}>{this.state.count} Likes</button>
        )
    }
}

export default LikeButton;