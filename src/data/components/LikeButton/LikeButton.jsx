import React from 'react';
import './LikeButton.css';


export default class LikeButton extends React.Component {
    state = {
        likeNum: 0,
        color: ['purple','blue','green','yellow','orange','red'],
        num: 0
    }

    likeCount = () => {
        let likeNum = this.state.likeNum + 1;
        const num = this.state.num >= 5 ? 0 : this.state.num + 1 ;
        this.setState({likeNum: likeNum , num})
    }

    render() {
        return (
                <button 
                    className="Like-btn" 
                    style={{backgroundColor: this.state.color[this.state.num]}} 
                    onClick={this.likeCount}
                    >
                    {this.state.likeNum} likes
                </button>
        )
    }
}