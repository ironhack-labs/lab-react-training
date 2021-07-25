import { Component } from 'react';

class LikeButton extends Component {

    state = {
        likesCount: 0,
    }

    addLikes() {
        this.setState({ likesCount: this.state.likesCount +1 })
    }

    

    render() {
        return (
            <button onClick={()=> this.addLikes()}>{this.state.likesCount} Likes</button>
        )
    }
}

export default LikeButton