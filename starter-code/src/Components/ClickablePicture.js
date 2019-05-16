import React, { Component } from 'react';

const imagesPath = {
    minus: "/img/isabela.jpg",
    plus: "/img/camila.jpg",
  }


class ClickablePicture extends Component {

    state = {
      open: true
    }
    toggleImage = () => {
      this.setState(state => ({ open: !state.open }))
    }
  
    getImageName = () => this.state.open ? 'plus' : 'minus'
  
    render() {
      const imageName = this.getImageName();

      return (
        <div>
          <img style={{maxWidth: '300px'}} src={imagesPath[imageName]} onClick={this.toggleImage} alt="user" />
        </div>
      );
    }
  }

  export default ClickablePicture