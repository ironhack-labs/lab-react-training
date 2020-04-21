import React, { Component } from 'react';

//IT.8
class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfLikes: 0,
            bgColor: "#00BCD4"
        }
    }


    handleLike = () => {
        this.setState({
            numOfLikes: this.state.numOfLikes + 1,
        })
    }


    ChangeColorFunction = () => {
        var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        this.setState({
            bgColor: ColorCode
        })
    }



    render() {
        return (
            <div>
                <button className='like-button' style={{ backgroundColor: this.state.bgColor }} onClick={() => { this.handleLike(); this.ChangeColorFunction()}}>{this.state.numOfLikes} Likes</button>
            </div>
        )
    }
}

export default LikeButton; 