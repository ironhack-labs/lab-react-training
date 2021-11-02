import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfLikes: 0,
        }
    }

    counterIncrease = () => {
        this.setState((initialValue, props) => {
            return {numberOfLikes: initialValue.numberOfLikes + 1};
        })
    }

    render() {
        return (
            <>
                <p>Button likes: {this.state.numberOfLikes}</p>
                <button onClick={this.counterIncrease}>Press it!</button>
            </>
        );
    }    
}




export default LikeButton
