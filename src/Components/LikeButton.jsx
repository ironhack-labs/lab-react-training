import React, {Component} from 'react';
import "./../styles/LikeButton.css";

class LikeButton extends Component {

    state ={
        counter : 1
    }

    handleIncrement = () => {
        this.setState({counter : this.state.counter +1}, () => {
            console.log(this.state)
        });
    };

 

    render() {
        return (
            <div>

        <button onClick={this.handleIncrement}>{this.state.counter} Likes</button>
        
            
                
            </div>
        )
    } 
}

export default LikeButton
