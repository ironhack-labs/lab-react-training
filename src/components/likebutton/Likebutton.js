import { Component } from "react";

class LikeButton extends Component {
    state = {
        likesCount: 0
    }

    handleLike() {
        this.setState({ likesCount: this.state.likesCount + 1 })
    }

    render() {
        const { likesCount } = this.state
        return(
            <>
                <button
                    onClick={() => this.handleLike()} 
                    className="btn btn-warning">
                    { likesCount } Likes 
                </button>
            </>
        )
    }
}

export default LikeButton;