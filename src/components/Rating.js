import React, { Component } from 'react';

class Rating extends Component {
    render({children} = this.props) {
        let rating = "";
        let ratingNum = Math.round(children);
        for(let i = 0; i < 5; i++){ 
            if(i < ratingNum){
                rating += "★";
            }else{
                rating += "☆"
            }
        }
        return (
            <div>
                {
                    rating
                }
            </div>
        );
    }
}

export default Rating;