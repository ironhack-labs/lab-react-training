import React from 'react'


class LikeButton extends React.Component {


    state = {
        counter: 0,
        bgColor: 'purple',
    };

    clickHandler = () => {
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
        this.setState((state, props) => ({
            counter: state.counter + 1,
            bgColor: colors[Math.floor(Math.random() * colors.length)]
        }))
    }

    render() {
        return (
            <div>
                <button style={{ color: 'white', backgroundColor: `${this.state.bgColor}` }} onClick={this.clickHandler}>{this.state.counter} {this.state.counter === 1 ? 'Like' : 'Likes'}</button>
            </div>
        )
    }

}




export default LikeButton;

