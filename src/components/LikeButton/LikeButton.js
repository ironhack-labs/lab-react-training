import "./LikeButton.css"
import { Component } from "react"

class LikeButton extends Component {
    constructor (props) {
        super(props)

        this.state = {
            likes: 0
        }
    }

    onLike = () => {
        this.setState((previous) => ({likes: previous.likes  + 1}))
    }

    render() {
        return (
            <div className="LikedButton" onClick={this.onLike} style={{cursor:'pointer'}}>
                {this.state.likes} Likes
            </div>
        )
    }
}

export default LikeButton