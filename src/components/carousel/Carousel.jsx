import React from 'react';
import "./Carousel.css";

export default class Carousel extends React.Component {
      state = {
          index: 0,
      }
    
      nextImg = () => {
                this.state.index === 0
                  ? this.setState({index: 3})
                  : this.setState({index: this.state.index - 1})
      }

      prevImg = () => {
              this.state.index === 3
                ? this.setState({index: 0})
                : this.setState({index: this.state.index + 1})
      }

      render() {
        return (
            <div className='Carousel'>
                <button onClick={this.nextImg}>Left</button>
                <img src={this.props.imgs[this.state.index]} alt="Carousel imgage" />
                <button onClick={this.prevImg}>Right</button>
            </div>
        );
      }
}