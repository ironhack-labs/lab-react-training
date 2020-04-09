import React, { Component } from "react";

class Carousel extends Component {

  state = {
    currentIndex: 0,
    images: [],
  }
  
  showImg = (imgs) => {
    // const currentState = this.state.images;
    // this.setState({images: currentState.push(imgs)});
    // console.log(this.state);
  }

  previous = () => {

  }

  next = () => {

  }

  render () {
    const { imgs } = this.props;
    return (
      <div className="greetings-box">
        <img src={this.showImg(imgs)} alt=""/>
        <div> 
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.next}>Next</button>
        </div>
      </div>
    )
  }
}

export default Carousel;