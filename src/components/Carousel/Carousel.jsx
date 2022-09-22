import { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    state= {
        img: this.props.images[1]
    }

    changePrevPic = () => {
        let indexOf = this.props.images.indexOf(this.state.img);

        if (indexOf >= 1) {
            this.setState({ img: this.props.images[indexOf - 1] });
        }       
    }

    changeNextPic = () => {
        let indexOf = this.props.images.indexOf(this.state.img);

        if (indexOf <= 2) {
          this.setState({ img: this.props.images[indexOf + 1] });
        }
    }

    render () {
        return (
          <div>
            <img src={this.state.img} alt="Random person"></img>
            <div className='Btns-container'>
              <button onClick={this.changePrevPic}>Previous</button>
              <button onClick={this.changeNextPic}>Next</button>
            </div>            
          </div>
        );
    }
};

export default Carousel;