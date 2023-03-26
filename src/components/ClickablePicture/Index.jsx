import './Index.css';
import max from '../../assets/images/maxence.png';
import maxGlass from '../../assets/images/maxence-glasses.png';
import { Component } from 'react';

class ClickablePicture extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      img: max,
    };
  }

  handleClick = () => {
    if (this.state.img === max) {
      this.setState({
        img: maxGlass,
      });
    } else {
      this.setState({
        img: max,
      });
    }
  };

  render() {
    return (
      <div className="ClickablePicture">
        <img src={this.state.img} alt="max" onClick={this.handleClick}></img>
      </div>
    );
  }
}

export default ClickablePicture;
