import React from "react";

let colors = ['purple','blue','green','yellow','orange','red'];

class LikeButton extends React.Component {
    state = {
        numberOfLikes: 0,
        color: colors[0]
    }

    handleClick = () => {
        let newNumber = this.state.numberOfLikes + 1;
        this.setState({
            numberOfLikes: newNumber,
            color: colors[newNumber % colors.length]
        })
    };

    render() {
        const style = {
            backgroundColor: this.state.color,
            color: "white",
            padding: "15px 32px",
            margin: "4px 2px"
        }
        return (
            <button style={style} onClick={this.handleClick}>{this.state.numberOfLikes} likes</button>
        );
    }
}

export default LikeButton;