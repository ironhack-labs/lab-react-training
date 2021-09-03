import React from 'react';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  state = {
    withGlasses: false,
  };

  clickPhoto = () => {
    this.setState({
      withGlasses: !this.state.withGlasses,
    });
  };

  render() {
    return (
      <button className="clickablePicture" onClick={this.clickPhoto}>
        {this.state.withGlasses ? (
          <img
            className="glasses"
            src={this.props.imgClicked}
            alt="person with glasses"
          />
        ) : (
          <img
            className="noGlasses"
            src={this.props.img}
            alt="person without glasses"
          />
        )}
      </button>
    );
  }
}

export default ClickablePicture;
