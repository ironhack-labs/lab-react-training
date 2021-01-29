import React from 'react'
import './LikeButton.css'

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleLikeClick = this.handleLikeClick.bind(this)
        this.getColor = this.getColor.bind(this)
        this.state = {
            likes: 0,
            backgroundColor: 'purple'
        };
    }


    getColor(n) {
        console.log('hey')
        const colors = ['purple','blue','green','yellow','orange','red'];
        return colors[n%colors.length]
    }


    handleLikeClick() {
        this.setState({
              likes: this.state.likes + 1,
              backgroundColor: this.getColor(this.state.likes+1)
        });
        
    }

    render() {

        return(
            <button onClick={this.handleLikeClick} style={{backgroundColor: this.state.backgroundColor}} className='LikeButton'>
                {this.state.likes} Likes
            </button>
        );
    }


}

export default LikeButton;