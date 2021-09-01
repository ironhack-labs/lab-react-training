import React from 'react';
import './Carousel.css';

export default class Carousel extends React.Component {

    state ={
      index: 0
    }

    backwards = () => {
      this.state.index === 0 ? this.setState({index: 3}) : this.setState({index: this.state.index - 1})
    }
    
    forward = () => {
      this.state.index === 3 ? this.setState({index: 0}) : this.setState({index: this.state.index + 1})
    }
    render() {
      return(
        <div className='Carousel'>
          <button onClick={this.backwards}>Prev</button>
          <img src={this.props.imgs[this.state.index]} alt='carousel images'></img>
          <button onClick={this.forward}>Next</button>
        </div>
      )
    }
}