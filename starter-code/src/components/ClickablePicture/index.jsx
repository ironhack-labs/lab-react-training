import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      glasses: true
    };
    this.toggleGlasses = this.toggleGlasses.bind(this);
  }

  toggleGlasses() {
    this.setState(previousState => ({
      glasses: !previousState.glasses
    }));
  }

  render() {
    const { img, imgClicked } = this.props;
    return (
      <button onClick={this.toggleGlasses}>
        {(this.state.glasses && <img src={imgClicked} alt="Oculos Não Aparece" />) || (
          <img src={img} alt="Não Apareço" />
        )}
      </button>
    );
  }
}

export default ClickablePicture;
