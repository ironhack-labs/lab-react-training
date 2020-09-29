import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    clickedImage: false
  }

  toggleImage = () => {
    this.setState((state) => ({
      clickedImage: !state.clickedImage
    }))
  }

  render() {
    const {img, imgClicked} = this.props;
    const {clickedImage} = this.state;

    return(
      <div>
        <img src={!clickedImage ? img : imgClicked} alt="test" onClick={this.toggleImage}/>
      </div>
    );
  }
}

export default ClickablePicture;