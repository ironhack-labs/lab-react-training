import React, { Component } from 'react'

export default class LikeButton extends Component {
    state={
        likes:0,
        color:0
    }
    CountNumber=()=>{
        this.setState(({ likes, color }) => ({
            likes: likes+1,
            color:color+5
          }));
        if(this.state.color>360){
        this.state.color=0
        }
    }
    render() {
        return (   
                <button className="LikeButton" style={{background:`hsl(${this.state.color},75%,50%)`}}
                onClick={this.CountNumber}>{this.state.likes} Likes</button>
            
        )
    }
}
