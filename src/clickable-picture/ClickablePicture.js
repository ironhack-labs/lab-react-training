import React from 'react';
import './ClickablePicture.css';

const firstPic = '../img/persons/maxence.png';

class ClickablePicture extends React.Component {
  state = {
    picture: firstPic,
  };

  handleTogglePicture = (e) => {
    e.preventDefault();
    const newPicture =
      this.state.picture === firstPic ? this.props.picture : firstPic;

    this.setState({
      picture: newPicture,
    });
  };

  render() {
    return (
      <div>
        <a href="" onClick={this.handleTogglePicture}>
          <img src={this.state.picture} />
        </a>
      </div>
    );
  }
}

export default ClickablePicture;
