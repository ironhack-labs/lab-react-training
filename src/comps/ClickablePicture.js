// imports
import React from 'react';

//components
class ClickablePicture extends React.Component {
  state = {
    img: '/img/persons/maxence.png',
  };
  changueImg = () => {
    if (this.state.img === '/img/persons/maxence.png') {
      this.setState({ ...this.state, img: '/img/persons/maxence-glasses.png' });
    } else if (this.state.img === '/img/persons/maxence-glasses.png') {
      this.setState({ ...this.state, img: '/img/persons/maxence.png' });
    }
  };
  render() {
    return (
      <div className="card">
        <img
          src={this.state.img}
          alt="Maxence"
          onClick={() => this.changueImg()}
        />
      </div>
    );
  }
}

// exports
export default ClickablePicture;
