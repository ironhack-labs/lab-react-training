import React, { Component } from 'react';
import './like-button.css';

export default class LikeButton extends Component {
   
    like = (val) => {
        console.log('working')
        this.props.setStartNo(this.props.likes,val)
            console.log(this.props.startNo);
            // this.styleChange();
    }
    // styleChange = () => {
    //    this.props.setStyle();
    //    console.log(this.props.likeColor)
    // }
    render() {
        return (
            <div className="like">
                <button style = {this.props.likeColor} onClick={()=>this.like(this.props.startNo)}>{this.props.startNo} Likes</button>
            </div>
        )
    }
}

