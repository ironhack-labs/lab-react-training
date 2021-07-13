import React from 'react'

class LikeButton extends React.Component {
    state = {
        counter: 0
      }
    likeHandler = () => {
        this.setState((state) => ({
            counter: state.counter + 1
        }))
    }
    render(){
        return (
            <>
                <span>Likes: {this.state.counter}</span>
                <button onClick={this.likeHandler}>Like</button>
                <br></br>
            </>
)}
}

export default LikeButton;