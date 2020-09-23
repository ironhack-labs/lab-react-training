import React, { Component } from 'react';

export default class Rating extends Component {
    render() {
        function stars(num) {
            return '★'.repeat(Math.round(num)) + '☆'.repeat(5 - Math.round(num));
        }
        return (
            <div>
                {stars(Number(this.props.children))}
            </div>
        )
    }
} 