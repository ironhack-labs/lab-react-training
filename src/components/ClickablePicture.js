import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    coolImage: this.props.img,
  };

  click = () => {
    this.state.coolImage === this.props.img
      ? this.setState({ coolImage: this.props.imgClicked })
      : this.setState({ coolImage: this.props.img });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.click}
          className="Image-click"
          src={this.state.coolImage}
          alt="glases"
        />
      </div>
    );
  }
}
export default ClickablePicture;
