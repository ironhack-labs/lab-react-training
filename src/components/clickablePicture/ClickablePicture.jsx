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
    setTimeout(() => this.setState({ clicked: false }), 3000);
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
          src={getImage()}
          alt="Iteration 9"
        />
      </div>
    );
  }
}
