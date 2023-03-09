import './index.css';
import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.img,
    };
  }

  handleChangeImage = () => {
    this.state.image === this.props.img
      ? this.setState({
          image: this.props.imgClicked,
        })
      : this.setState({
          image: this.props.img,
        });
  };

  render() {
    return (
      <div className="ClickablePicture">
        <button onClick={this.handleChangeImage}>
          <img src={this.state.image} alt="..." />
        </button>
      </div>
    );
  }
}

export default ClickablePicture;
