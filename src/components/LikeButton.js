import React, { Component } from 'react'

class LikeButton extends Component {
    constructor(props) {
        super(props);
            this.state = {
                likes: 0,
                index: 0,
                btnColor: ['purple','blue','green','yellow','orange','red']
            };
    };

    handleClick() {
        this.setState({
            likes: this.state.likes + 1,
            index: this.state.index < 6 ? this.state.index + 1 : 0
        });
    };

    render () {
        const divStyle = {
                    backgroundColor: this.state.btnColor[this.state.index]
                };

        return <button className="clickable" onClick={() => this.handleClick()} style={divStyle}>{`${this.state.likes} Click Me`}</button>
    };
};

export default LikeButton;
