import React, { Component } from 'react'

export class Rating extends Component {
    render() {
        let stars = [0,0,0,0,0];
        let blackStars = Math.round(this.props.children)
        return (
            <div>{stars.map((star, i)=>i<blackStars? <i class="fas fa-star"></i> : <i class="far fa-star"></i>)}</div>
        )
    }
}

export default Rating
