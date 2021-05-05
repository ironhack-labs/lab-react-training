import React from 'react';
import './index.css';

class Carousel extends React.Component {
  state = {
    imgIndex: 0
  }

  nextPicture = () => {
    this.setState((state, props) => {
      return {
        imgIndex: state.imgIndex < 3 ? state.imgIndex + 1 : state.imgIndex
      }
    })
  }

  prevPicture = () => {
    this.setState((state, props) => {
      return {
        imgIndex: state.imgIndex > 0 ? state.imgIndex - 1 : state.imgIndex
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={ this.prevPicture }>Previous</button>
        <img src={ this.props.imgs[this.state.imgIndex] } alt="profilepicture " />
        <button onClick={ this.nextPicture }>Next</button>
      </div>
    )
  }
}

export default Carousel