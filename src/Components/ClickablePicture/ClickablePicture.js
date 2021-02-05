import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.img,
      defaultSrc: [...new Set(props.img)],
      clickedSrc: props.imgClicked,
      clicked: false,
    };
  }

  handlePicChange = () => {
    this.setState({
      src: this.state.clicked ? this.state.defaultSrc : this.state.clickedSrc,
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.src} onClick={this.handlePicChange} />
      </div>
    );
  }
}

export default ClickablePicture;