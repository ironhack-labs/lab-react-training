import React from 'react';
import { render } from 'react-dom';
import MaxWithoutGlass from './persons/maxence.png';
import MaxWithGlass from './persons/maxence-glasses.png';
import '../App.css';

class ClickablePicture extends React.Component {
  state = {
    img: MaxWithoutGlass,
    glass: false,
  };

  putGlass = () => {
    if (this.state.glass) {
      this.setState({ glass: false });
      this.setState({ img: MaxWithoutGlass });
    } else {
      this.setState({ glass: true });
      this.setState({ img: MaxWithGlass });
    }
  };

  render() {
    return (
      <img src={this.state.img} className="glass" onClick={this.putGlass} />
    );
  }
}

export default ClickablePicture;
