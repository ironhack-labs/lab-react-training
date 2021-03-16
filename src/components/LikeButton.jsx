import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0,
        backgroundColor: 'purple'
    };
    


    handleIncrementClick = () => {
        const random = Math.floor(Math.random()*6)
        this.setState({
            count: this.state.count + 1,
            backgroundColor: ['purple','blue','green','yellow','orange','red'][random]
        });
    };
    render() {
        return (
            <div>
                <button style={{backgroundColor: `${this.state.backgroundColor}`}} onClick={this.handleIncrementClick}>{this.state.count} likes</button>
            </div>
            )
    }
}

export default LikeButton