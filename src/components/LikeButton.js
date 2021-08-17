import React from 'react';

class LikeButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            numberOfLikes: 0
        }
    }

    clickBtn = () => {
        this.setState((prevState) => {
            return {
                numberOfLikes: prevState.numberOfLikes + 1
            }
        })
    }

    render(){
        return (
            <button onClick={this.clickBtn}>{this.state.numberOfLikes} Likes</button>
        )
    }
}

export default LikeButton