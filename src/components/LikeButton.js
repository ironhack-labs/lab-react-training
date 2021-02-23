import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        count: 0,
    };

    handleIncrementClick = () => {
        this.setState((state, props) => ({
            count: state.count + 1
        }))
      };

    render() {
        return (
            <div>
                <button style={{width:"150px", backgroundColor:"green", border:"solid 10px lightblue", borderRadius:"15px", color:"white", fontSize:"20px", padding:"10px"}} onClick={this.handleIncrementClick}>{this.state.count} Likes</button>
            </div>
        )
    }
}
