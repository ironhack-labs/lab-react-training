import React, {Component} from 'react';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.index = 0;
        this.state = {
            img : props.imgs[this.index]
        }
    }

    handleClick(direction) {
        if (direction === 'back') {
             this.index-- ;
        } else {
            this.index++ ;
        }

        if (this.index >= this.props.imgs.length) {
            this.index = 0;
        }

        if (this.index < 0) {
            this.index = this.props.imgs.length - 1;
        }

        this.setState({img: this.props.imgs[this.index]});
    }

    render() {
        return (<div className="Carousel" style={{backgroundImage: `url(${this.state.img})`}}>
            <button onClick={() => this.handleClick('back')}> Back </button>
            <button onClick={() => this.handleClick('forward')}> Forward </button>
        </div>)
    }
}

export default Carousel