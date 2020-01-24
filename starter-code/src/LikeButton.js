import React, { Component } from 'react';
import "./index.css";


class LikeButton extends Component {
    state = {
        clickCount: 0,
       /* backColor: /*["purple", "blue", "green", "yellow", "orange", "red"]*/
       backColor: "green"

    };

colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };


clickHandler = () => {
    const newCount = this.state.clickCount + 1;

this.setState({
    clickCount: newCount,
    backColor: this.colorMapper()
})
}

render() {
    return(
    <button onClick={this.clickHandler}>{this.state.clickCount} Likes</button>
    /*theColor={this.state.backColor}*/
    )
}
}



export default LikeButton;