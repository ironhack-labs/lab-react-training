import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: props.imgs,
      picOn: 0,
    };
  }

  changeLeft = () => {
    if (this.state.picOn === this.state.pics.length - 1) {
      this.setState({ picOn: this.state.picOn });
    } else {
      this.setState({ picOn: this.state.picOn + 1 });
    }
  };

  changeRigth = () => {
    if (this.state.picOn === 0) {
      this.setState({ picOn: this.state.pics.length - 1 });
    } else {
      this.setState({ picOn: this.state.picOn - 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changeLeft}>TO THE LEFT TO THE LEFT</button>
        <img src={this.state.pics[this.state.picOn]} alt="pictures"></img>
        <button onClick={this.changeRigth}>TO THE RIGHT TO THE RIGHT</button>
      </div>
    );
  }
}

export default Carousel;
