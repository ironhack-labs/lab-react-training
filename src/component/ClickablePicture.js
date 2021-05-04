/*
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
*/

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
    };
  }

  /* 
  state = {
    counter: 0
  }
  */

  clickHandler = () => {
    this.setState((state, props) => ({
      img: props.imgClicked,
    }));
  };

  render() {
    return (
      <img
        className="ClickablePicture"
        onClick={this.clickHandler}
        src={this.state.img}
        alt="ClickablePicture"
      />
    );
  }
}

export default App;
