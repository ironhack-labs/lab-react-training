import React from 'react';
import './ClickablePicture.css';

export default class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  onClick = (e) => {
    this.setState({ clicked: true });
  };

  unClick = () => {
    this.setState({ clicked: false });
  };
  render() {
    const getImage = () => {
      if (this.state.clicked === true) {
        return this.props.imgClicked;
      } else {
        return this.props.img;
      }
    };
    return (
      <div className="ClickablePicture">
        <img
          onClick={this.onClick}
          onTransitionEnd={this.unClick}
          src={getImage()}
          alt="Iteration 9"
        />
      </div>
    );
  }
}
