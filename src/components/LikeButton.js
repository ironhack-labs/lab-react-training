import React, { Component } from "react"

class LikeButton extends Component {
    state = {
        count: 0,
        backGroundColor: "gray"
    }

    addCount = () => {
        const colors = ['purple','blue','green','yellow','orange','red']
        this.setState({
            count: this.state.count + 1,
            backGroundColor: colors[Math.floor(Math.random()*colors.length)]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addCount} style={{backgroundColor: this.state.backGroundColor}} >{this.state.count} Likes</button>
            </div>
        )
    }
}

export default LikeButton;