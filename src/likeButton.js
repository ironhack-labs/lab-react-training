import React from 'react';

class LikeButton extends React.Component {
    state={
        likeCount: 0,
        colour: 'purple'
    }

    onClickHandler = () => {
        const newLikeCount = this.state.likeCount + 1;
        const coloursArray = ['purple','blue','green','orange','red'];
        const newColour = coloursArray[Math.floor((Math.random() * coloursArray.length) + 1)];
        this.setState({
            likeCount: newLikeCount,
            colour: newColour
        })
    }

    render(){
        return(
            <div>
                <button className="like-button" style={{backgroundColor: this.state.colour}} onClick={this.onClickHandler}>{this.state.likeCount} Likes</button>
            </div>
        )
    }
}

export default LikeButton