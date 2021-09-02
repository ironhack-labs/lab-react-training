import React, { Component } from 'react';


class Rating extends Component {

    constructor(props) {
        super(props);
    }

    ratingOutput = (rating) => {
        let result = "";
        if (rating < 0.5) {result = "☆☆☆☆☆"}
        else if (rating >= 0.5 && rating < 1.5) {result = '★☆☆☆☆'} 
        else if (rating >= 1.5 && rating < 2.5) {result = '★★☆☆☆'} 
        else if (rating >= 2.5 && rating < 3.5) {result = '★★★☆☆'} 
        else if (rating >= 3.5 && rating < 4.5) {result = '★★★★☆'}
        else if (rating >= 4.5) {result = '★★★★★'}
        return result;
    }

    render() {
        return (
            <div>
                {this.ratingOutput(this.props.children)}
            </div>
        );
    }
}

export default Rating;