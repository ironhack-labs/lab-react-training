import React, { Component } from 'react'

export default class LikeBtn extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    count = () => {
        this.setState(({count}) => ( {count: count + 1 } ))
    }
    
    render() {
        return (
            <button className="btn btn-primary mt-3" onClick={this.count}>{this.state.count} likes</button>
        )
    }
}
