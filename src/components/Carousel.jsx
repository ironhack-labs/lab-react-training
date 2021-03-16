import React from 'react';

class Carousel extends React.Component {
    state = {
        count: 0,
        image: this.props.imgs[0]
    };

    handleRightClick = () => {
        if (this.state.count < 3) {
            this.setState({
                count: this.state.count + 1,
            })
        const timeoutId = setTimeout (() => this.changeImage(), 35);
        }
    }

    handleLeftClick = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
            })
            const timeoutId = setTimeout (() => this.changeImage(), 35);
        }
    }

    changeImage = () => {
        if (this.state.count === 0) {
            this.setState({
                image: this.props.imgs[0]
            })
        }
        if (this.state.count === 1) {
            this.setState({
                image: this.props.imgs[1]
            })
        }
        if (this.state.count === 2) {
            this.setState({
                image: this.props.imgs[2]
            })
        }
        if (this.state.count === 3) {
            this.setState({
                image: this.props.imgs[3]
            })
        }
    }

    render() {
        console.log(this.state.img)
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}><button onClick={this.handleLeftClick}>left</button><img src={this.state.image} alt="image"/><button onClick={this.handleRightClick}>right</button></div>
        )
    }
}

export default Carousel;