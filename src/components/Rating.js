import React, { Component } from 'react'

export default class Rating extends Component {
    render() {
        let rate = this.props.children
        return (
            <div className="rating">
                {rate<0.5 ? '☆' : '★'}
                {rate<1.5 ? '☆' : '★'}
                {rate<2 ? '☆' : '★'}
                {rate<4 ? '☆' : '★'}
                {rate<5 ? '☆' : '★'}
            </div>
        )
    }
}
