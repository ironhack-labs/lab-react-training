import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    url: this.props.img,
  };

  setUrl = () => {
    this.state.url === this.props.img
      ? this.setState({
          url: this.props.imgClicked,
        })
      : this.setState({
          url: this.props.img,
        });
  };

  render() {
    return <img onClick={this.setUrl} src={this.state.url} alt="guy" />;
  }
}

export default ClickablePicture;
