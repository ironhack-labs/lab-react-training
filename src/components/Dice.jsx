import React, {Component} from 'react';

class Dice extends Component {
    constructor(props) {
        super(props);
        this.isClicked = false;
        this.state = {
            img : this.getRandomImg()
        }
    }

    getRandomImg() {
        const randomNumber = Math.floor((Math.random() * 6) + 1);
        return `/img/dice${randomNumber}.png`;
    }

    handleClick() {
        if (this.isClicked) return;
        this.isClicked = true;
        this.setState({img: '/img/dice-empty.png'})
        setTimeout(() => {
            this.setState({img: this.getRandomImg()})
            this.isClicked = false;
        }, 1000)
    }

    render() {
        return <img onClick={() => this.handleClick()} src={this.state.img}></img>
    }
}

export default Dice