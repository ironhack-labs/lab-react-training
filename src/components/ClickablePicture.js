import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    image: false,
  };

  changePicture = () => {
      this.setState({ image: true })
  }

  render() {
    return <div style={{ margin: "1rem" }}>
        <img onClick={this.changePicture} src={this.state.image ? this.props.imgClicked : this.props.img} alt="boy in glasses when clicked"/>
    </div>
  }
}

export default ClickablePicture;
