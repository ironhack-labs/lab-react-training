import React from 'react'

class LikeButton extends React.Component{
    state = {
        counter: 0
    }
    colors = ['purple','blue','green','yellow','orange','red']
    
    getColor() {
        return this.colors[this.state.counter]
    }

    render() {
        return(
            <div className="LikeButton">
                <button 
                style={{backgroundColor: this.getColor()}} onClick={() => this.setState({ ...this.state, counter: this.state.counter + 1 })}>
                {this.state.counter} Likes </button>
            </div>
        )
    }
}

export default LikeButton