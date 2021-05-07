import React from 'react';
 
class Carousel extends React.Component {
  state = {
    index: 0
  };
 
  leftButtonClick = () => {
    if (this.state.index === 0)
    this.setState({
      index: this.props.imgs.length - 1
    });
    else
    this.setState(state => ({
      index: state.index - 1
    }));
  };

  rightButtonClick = () => {
    if (this.state.index === this.props.imgs.length - 1)
    this.setState({
      index: 0
    });
    else
    this.setState(state => ({
      index: state.index + 1
    }));
  };
 
  render() {
    return (
      <div className="Carousel">
        <button onClick={this.leftButtonClick}>Left</button>
        <img src={this.props.imgs[this.state.index]} />
        <button onClick={this.rightButtonClick}>Right</button>
      </div>
    );
  }
}
 
export default Carousel;