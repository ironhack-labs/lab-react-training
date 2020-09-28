import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    hasSunglasses: false,
  };

  handleClick = () => {
    this.setState({ hasSunglasses: !this.state.hasSunglasses });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.hasSunglasses ? this.props.imgClicked : this.props.img}
          alt="" onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ClickablePicture