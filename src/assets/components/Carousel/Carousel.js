import React, {Component} from 'react';

class Carousel extends Component {
  // constructor(prop){
  //   super(prop);
  // }
    state = {
      image: this.props.images,
      imgPosition: 0
    }
  
    next = () => {
      if (this.state.imgPosition >= 0 && this.state.imgPosition <= 2) {
        this.setState({
          imgPosition: this.state.imgPosition + 1
        })
      }    
    } 
  
    previous = () => {
      if (this.state.imgPosition < 4 && this.state.imgPosition > 0) {
        this.setState({
          imgPosition: this.state.imgPosition - 1
        })
      }
  }
  render() {
    return (
      <div>
        <img src={this.state.image[this.state.imgPosition]}
        alt="carousel-img"/>
        <button 
          className="me-3"
          onClick={this.next}> Next
        </button>
        <button 
          onClick={this.previous}> Previous
        </button>
      </div>
    )
  }
}
 export default Carousel;
