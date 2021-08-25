import React, { Component } from "react"

class LikeButton extends Component {
state = {
        likes: 0,
        colors: ['purple','blue','green','yellow','orange','red'],
        currentColor: '',
        index:0
    }


handleIncrementLikes() {
    const currentLikeCount = this.state.likes
    const newLikeCount = currentLikeCount + 1
    const index = this.state.index
    let indexes;
    if(index < 5) {
        indexes = index + 1
    } else {
        indexes = 0
    }

    this.setState ({
        index: indexes, 
        likes: newLikeCount, 
        currentColor: this.state.colors[this.state.index]
    })
  //  this.setState({likes: this.state.likes + 1})
}

render(){
const likes = this.state.likes
    return(
        <div className="d-flex justify-content-center m-5">
        <button className="m-2 btn-lg" style={{backgroundColor: this.state.currentColor}} onClick={() => this.handleIncrementLikes()}>Likes {likes}</button>
    
    </div>)
}
}

export default LikeButton