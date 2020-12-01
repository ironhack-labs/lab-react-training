import React from 'react'

export default class LikeButton extends React.Component {
    state = {
        clickCount: 0,
        // liked: false
    }

    clickHandler = () => {
        console.log('clicked');
        this.setState( ( state , props ) => ({
            counter: state.clickCount +1
        }));
    }

    render() {
        return (
            <div>
                <button onClick= {this.clickHandler}> {this.state.clickCount} Likes </button>
            </div>
        )
    }
}

