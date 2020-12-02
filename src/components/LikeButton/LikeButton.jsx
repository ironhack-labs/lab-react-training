import React, { Component } from 'react'

export default class LikeButton extends Component {

static defaultProps = {
    colors: ["purple","blue","green","yellow","orange","red"]
  }

  state = {
        likes: 0,
        curColor: null
    }

    handleClick = () => {
    let randomizer = Math.floor(Math.random() * this.props.colors.length + 1)
    this.setState({
      likes: this.state.likes + 1,
      curColor: this.props.colors[randomizer]
    })
  }

    render() {
        return (
            <div>
            {/* you do not want handleClick() as this would call the function when browser loads */}

            <button style={{backgroundColor: `${this.state.curColor}`}} onClick={this.handleClick}>{this.state.likes} Likes</button>
            </div>
        )
    }

}
