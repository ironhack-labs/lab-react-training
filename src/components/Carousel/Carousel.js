import React, { Component } from 'react';

class Carousel extends Component {
    state = {
      img: this.props.imgs,
      value: 0 
    }
  handleImage = () => {
    const { img, value} = this.state;
    console.log(this.state.imgs);
    return img[value]
  }

  previousImg = () => {
    const { value } = this.state;
    if(value === 0){
      this.setState({
        value: value + 3
      })
    }else {
      this.setState({
        value: value - 1
      })
    }
  }

  nextImg = () => {
    const { value } = this.state;
    if (value === 3) {
      this.setState({
        value: value - 3
      })
    } else {
      this.setState({
        value: value + 1
      })
    }
  }


  render(){
    return (<div><button onClick={this.previousImg}>Prev </button><img src={this.handleImage()} alt='' /> <button onClick={this.nextImg}>Next</button></div>)
  }
}
export default Carousel; 