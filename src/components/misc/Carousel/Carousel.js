import React, {Component} from 'react';

class Carousel extends Component {

    state = {
      initialPosition: 0
    }

    backwards () {
      if (this.state.initialPosition > 0) {
        this.setState({
            initialPosition: this.state.initialPosition - 1 
        })
      }
    }

    forward () {
      if (this.state.initialPosition < 3){
        this.setState({
            initialPosition: this.state.initialPosition + 1
        })
      }    
    } 


  render() {
    return (
      <div>
        <img 
        src={this.props.images[this.state.initialPosition]}
        alt="Carousel"
        />
        <div>
            <button onClick={() => this.forward()}>Forward</button>
            <button onClick={() => this.backwards()}>Backwards</button>
        </div>
      </div>
    )
  }
}
 export default Carousel;

