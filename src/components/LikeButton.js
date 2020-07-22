import React, { Component } from 'react'

export default class LikeButton extends Component {

    constructor(props){
        super(props)
        this.state = {
            clicks: 0
        }
    }

    sum = () => {
        this.setState({
            clicks: this.state.clicks+1
        })
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary mb-3" onClick={this.sum}>Likes: {this.state.clicks}</button>
            </div>
        )
    }
}
