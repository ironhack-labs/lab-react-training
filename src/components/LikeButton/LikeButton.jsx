import React, { Component } from 'react'

export default class LikeButton extends Component {

    state = {
        likes: 0,
        color: ['purple','blue','green','yellow','orange','red'],
        selectedColor: 'purple'
    }

    likeUp = () => {
        let num = this.state.likes + 1
        let colorNum = Math.floor(Math.random() * 7)
        this.setState({
          likes: num,
          selectedColor: this.state.color[colorNum]
        })
      }

    render() {
        return (
            <div>
                <button className='likeButton' style={{backgroundColor: `${this.state.selectedColor}`}} onClick={this.likeUp}>{this.state.likes} Likes</button>
            </div>
        )
    }
}




