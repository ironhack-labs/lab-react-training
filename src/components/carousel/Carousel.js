import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    imageDisplayed: this.props.imgs[0],
    index: 1,
  };

  clickLeft = () => {
    let newIndex = this.state.index;
    console.log(`newIndex`, newIndex);
    newIndex--;
    console.log(`newIndex after ++`, newIndex);
    const imageArr = [this.props.imgs[this.state.index]];
    console.log(`imageArr`, imageArr);

    this.setState(
      {
        index: newIndex,
        imageDisplayed: imageArr,
      },
      console.log('click left')
    );
  };
  clickRight = () => {
    let newIndex = this.state.index;
    console.log(`newIndex`, newIndex);
    newIndex++;
    console.log(`newIndex after ++`, newIndex);
    const imageArr = [this.props.imgs[this.state.index]];
    console.log(`imageArr`, imageArr);

    this.setState(
      {
        index: newIndex,
        imageDisplayed: imageArr,
      },
      console.log('click right')
    );
  };

  //   Carousel = () => {
  //     // this.state.index++;
  //     this.clickRight();
  //     const imageArr = [this.props.imgs[this.state.newIndex]];

  //     this.setState(
  //       {
  //         imageDisplayed: imageArr,
  //       },
  //       () => console.log(this.state.imageDisplayed)
  //     );
  //   };

  render() {
    return (
      <div>
        <h1>Carousel</h1>
        <div>
          <button onClick={this.clickLeft}>Left</button>
          <button onClick={this.clickRight}>Right</button>
          <img
            //   onClick={this.Carousel}
            src={this.state.imageDisplayed}
            alt="Person"
          />
        </div>
      </div>
    );
  }
}
