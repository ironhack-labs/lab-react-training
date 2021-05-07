import React from 'react';
 
class ClickablePicture extends React.Component {
  state = {
    clicked: false
  };
 
  toogleClicked = () => {
    this.setState((state) => ({
      clicked: !state.clicked
    }));
  };
 
  render() {
    return (
        <img className="ClickablePicture" onClick={this.toogleClicked} src={this.state.clicked ? this.props.imgClicked : this.props.img} />
    );
  }
}
 
export default ClickablePicture;