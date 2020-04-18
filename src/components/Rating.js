import React, { Component } from 'react';

class Rating extends Component {
    render() {
        let star = this.props.children;
        return (
            <div>
                {star >= 0.5 ? '★' : '☆'}
                {star >= 1.5 ? '★' : '☆'}
                {star >= 2.5 ? '★' : '☆'}
                {star >= 3.5 ? '★' : '☆'}
                {star >= 4.5 ? '★' : '☆'}
            </div>
        )
    }
}


export default Rating;