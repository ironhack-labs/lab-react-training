import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        index: 0
    }

    render() {

        const colors = ['purple','blue','green','yellow','orange','red'];

        const buttonStyle = {
            backgroundColor: colors[this.state.index > 4 ? 5 : this.state.index]
        }

        return (
            <div className='likeCont'>
                <button style={buttonStyle} onClick={
                    (e) => {
                        return this.setState({
                            index: this.state.index + 1
                        })
                    }
                }>
                {this.state.index} Likes
                </button>
            </div>
        )

    }

}

export default LikeButton;