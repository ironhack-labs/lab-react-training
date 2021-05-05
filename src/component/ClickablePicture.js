import React from 'react';

class App extends React.Component {
  state = { status: 0 };

  clickHandler = () => {
    this.setState({ status: 1 });
  };

  render() {
    const img = this.state.status > 0 ? this.props.imgClicked : this.props.img;
    return (
      <img
        className="ClickablePicture"
        onClick={this.clickHandler}
        src={img}
        alt="ClickablePicture"
      />
    );
  }
}

export default App;
