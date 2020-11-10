import React, { Component } from 'react'

function getRandomInt(max) {
    return Math.floor(Math.random() * max) //The maximum is exclusive and the minimum is inclusive
  }

export class LikeButton extends Component {
    state = {
        count:0,
        colorInd:0,
    }
    colorArr =  ['purple','blue','green','yellow','orange','red']
    addCount = ()=>{
        let index = this.state.colorInd === 5 ? 0 : this.state.colorInd + 1;
        this.setState({count:this.state.count+1, colorInd:index})
    }
    render() {
        return (
            <button style={{backgroundColor:this.colorArr[this.state.colorInd]}} onClick={()=>this.addCount()}>
                {this.state.count===1?this.state.count+' Like' : this.state.count+' Likes'}
            </button>
        )
    }
}

export default LikeButton
