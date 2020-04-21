import React, { Component } from 'react';

class LikeButton extends Component {
    state = {
        counter: 0,
      };
    
    handleClickIncrement = () => {
        this.setState({
          counter: this.state.counter + 1,
        });
    };

    render(){
        return(
            <span className="container-buttonlike">
                <button className="btn-likebutton" onClick={this.handleClickIncrement}>{this.state.counter} Likes</button>
            </span>
        )
    }
}

export default LikeButton;