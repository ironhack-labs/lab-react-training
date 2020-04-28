import React, { Component } from "react";
import "../index.css";

class LikeButton extends Component {
    state = {
        likes: 0,
        backgroundColor: "purple"
    }

    getRandomColor = () => {
        let color = ""
        let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
        let index = Math.floor(Math.random() * colors.length);
        color = colors[index];
        return color;
    }

    addLikes = () => {
        let { likes, backgroundColor } = this.state;
        likes++;
        backgroundColor = this.getRandomColor();
        this.setState({ likes, backgroundColor });
    }


    render() {
        const { likes, backgroundColor } = this.state;
        const { addLikes } = this;
        return (
            < button className="button" onClick={addLikes} style={{ backgroundColor: backgroundColor }}>
                {likes} Likes
            </button >
            
        )
    }
}

export default LikeButton; 