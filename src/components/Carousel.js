import React, { Component } from 'react';
import '../assets/css/Carousel.css'

export default class Carousel extends Component {
    state = {
        imgs: this.props.imgs,
        i: 0
    }
    previous = (n) => {
        let i = this.state.i - 1;
        if (n === '+') { i = this.state.i + 1 }
        if (i > this.state.imgs.length - 1) { i = 0 }
        if (i < 0) { i = this.state.imgs.length - 1 }
        this.setState({ i: i })
    }


    render() {
        // const styles = {
        //     backgroundImage: `url(${this.state.imgs[this.state.i]})`
        // }
        return (
            <div className='carousel'>
                <button onClick={this.previous}>{'<'}</button>
                <img src={this.state.imgs[this.state.i]} />
                <button onClick={() => this.previous('+')}>{'>'}</button>
            </div>
        )
    }
}

