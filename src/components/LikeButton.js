import React from 'react'

class LikeButton extends React.Component{
    state = {
        counter: 0
        
    }

    render() {
        return(
            <div className="LikeButton">
                <button onClick={() => this.setState({ ...this.state, counter: this.state.counter + 1 })}>
                {this.state.counter} Likes </button>
            </div>
        )
    }
}

export default LikeButton