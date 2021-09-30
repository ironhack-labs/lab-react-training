import React from 'react';

let colorList = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']


class LikeButton extends React.Component {
    state = {
        count: 0,
        color: "purple"
    };

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1,
            color: colorList[Math.floor(Math.random() * colorList.length)]
        });
    };

render() {
    let elementStyle = {backgroundColor: this.state.color, width: "100px"}
    return (
        <button onClick={this.handleIncrementClick} style={elementStyle}>{this.state.count} Likes</button>
    );
    }
}

export default LikeButton;