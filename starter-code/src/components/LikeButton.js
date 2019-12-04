import React, { Component } from 'react';

class LikeButton extends Component {
    state = {
        "clicks": 0,
        "colors": ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
        'colorIdx': 1
    }


    ciclycIndex = () => {

        !(this.state.colorIdx % (this.state.colors.length) === 0)
            ? this.setState({
                "colorIdx": this.state.colorIdx + 1
            })
            : this.setState({
                "colorIdx": 1
            })
        console.log(this.state.colorIdx)
    }

    changeState = () => {
        this.setState({
            "clicks": this.state.clicks + 1
        })
        this.ciclycIndex();
    }

    render() {
        return (

            <button
                id="LikeButton"
                onClick={this.changeState}
                style={{
                    backgroundColor: `${
                        this.state.colors[this.state.colorIdx - 1]
                        }`
                }}
            >
                likes:  {this.state.clicks}
            </button>

        );
    }
}

export default LikeButton; 