import React, {Component} from 'react';
import '../assets/css/LikeButton.css'

class LikeButton extends Component {
    state = {
        value: 0,
        color: 'gainsboro'
    }

    changeButton = () => {
        this.setState({
           color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
           value: this.state.value + 1
        })
    }

    render() {
        return(
        // <div className="Button">
            <button className="LikeButton" style={{backgroundColor: `${this.state.color}`, color: 'white'}} onClick={this.changeButton}>{this.state.value} {this.state.value !== 1 ? 'Likes' : 'Like'}</button>
        // </div>
        )
    }
}

export default LikeButton;