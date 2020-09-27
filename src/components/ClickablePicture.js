import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    prop: 'nonClicked',
  };

  addGlasses() {
    if (this.state.prop === 'clicked') {
      this.setState({
        prop: 'nonClicked',
      });
    } else {
      this.setState({
        prop: 'clicked',
      });
    }
  }
  render() {
    if (this.state.prop === 'nonClicked') {
      return (
        <button className="addGlasses" onClick={() => this.addGlasses()}>
          <img
            src={this.props.img}
            className="ClickablePicture"
            alt="avatar"
          ></img>
        </button>
      );
    } else {
      return (
        <button className="addGlasses" onClick={() => this.addGlasses()}>
          <img
            src={this.props.imgClicked}
            className="ClickablePicture"
            alt="avatar with glasses"
          ></img>
        </button>
      );
    }
  }
}

export default ClickablePicture;
