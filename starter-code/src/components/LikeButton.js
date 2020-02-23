import React, { Component } from 'react'
import styled from 'styled-components'

const StyleButton = styled.button`
background-color: ${({bgColor}) => bgColor || 'white'};
color: white;
height: 50px;
width:150px;
`

export default class LikeButton extends Component {
    state = {
        likes: 0,
        times: 0
    }

    colors = ['purple','blue','green','yellow','orange','red']
    handleLikes = ()=> {
        this.setState({
            likes: this.state.likes +1,
            times: this.state.times < this.colors.length -1 ? this.state.times +1 : 0
        })
    }

    render() {
        return (
            <StyleButton bgColor={this.colors[ this.state.times]} onClick={this.handleLikes}>
                {this.state.likes} Likes
            </StyleButton>
        )
    }
}