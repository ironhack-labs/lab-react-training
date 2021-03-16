import React, {Component} from "react";
import "../styles/LikeButton.css";

class LikeButton extends Component{


    state = {
        LikeButton:0,
    };
    handdleIncrement = () => {
        this.setState({LikeButton: this.state.LikeButton + 1}, () => {
            console.log(this.state.LikeButton);
        });
    };

    render () {

        return (
            <div className= "likeButton">
                <button onClick={() => this.setState({ LikeButton: this.state.LikeButton + 1 })}> {this.state.LikeButton} Likes</button>
            </div>
        );
    
    }





};

export default LikeButton;