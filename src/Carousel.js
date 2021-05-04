import React from 'react';


class Carousel extends React.Component {
    state = {
        counter: 0
    }

    leftButton = () => {
        if (this.state.counter === 0) {
            this.setState({
                counter: this.state.counter + 3
            })
        } else {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }
    rightButton = () => {
        if (this.state.counter === 3) {
            this.setState({
                counter: this.state.counter - 3
            })
        } else {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.leftButton}>Left</button>
                <img src={this.props.imgs[this.state.counter]} alt='Pics' />
                <button onClick={this.rightButton}>Right</button>
            </div>
        )
    }
}



export default Carousel;