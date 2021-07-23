import { Component } from 'react';

class LikeButton extends Component {

    state = {
        likesCount: 0,
        colors: ['purple','blue','green','yellow','orange','red']
    }

    handleLikes() {
        this.setState((state) => ({
            likesCount: state.likesCount + 1
        }))

    }
    render() {
        const { likesCount } = this.state
        return ( 
            <button className="btn btn-sm btn-primary" 
            style={{backgroundColor: this.state.colors}}
            onClick={() => this.handleLikes()}>Like { likesCount }</button>
        )
       
    }
}

export default LikeButton