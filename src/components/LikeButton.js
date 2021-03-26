import React, {Component} from 'react'
import '../assets/css/LikeButton.css'

class LikeButton extends Component {
    state = {
        numLikes: 0
    }

    increment = () => {
        this.setState({numLikes: this.state.numLikes + 1})
    }

    render() {
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        const color = colors[this.state.numLikes % colors.length]
        //console.log(color)
        
        return (
            <div className="LikeButton">
                <button style={{ backgroundColor: color }} onClick={this.increment}>{this.state.numLikes} Likes</button>
            </div>
        )
    }
}

export default LikeButton