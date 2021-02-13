import React from 'react';

class ClickablePictureClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.img,
    };
    this.setImage = this.setImage.bind(this);
  }

  setImage(newImage) {
    this.setState((state) => ({ image: newImage }));
  }

  changeImg = (actual) => {
    const newImg =
      actual === this.props.img
        ? this.setImage(this.props.imgClicked)
        : this.setImage(this.props.img);
  };

  render() {
    return (
      <div>
        <img
          src={this.state.image}
          alt="person"
          onClick={() => this.changeImg(this.state.image)}
        />
      </div>
    );
  }
}

export default ClickablePictureClass;
