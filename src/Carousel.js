import React from 'react';
import './index.css';

class Carousel extends React.Component {
  state = {
    imgCounter: 0,
    img: this.props.imgs[0]
  }
  nextPicture = () => {
    if (this.state.imgCounter < 3) {
      this.state.imgCounter++
      this.setState((state, props) => {
        return {
          img: this.props.imgs[state.imgCounter]
        }
      })
    }
  }

  prevPicture = () => {
    if (this.state.imgCounter > 0) { this.state.imgCounter-- }
    this.setState((state, props) => {
      return {
        img: this.props.imgs[state.imgCounter]
      }
    })
  }

  render() {
    console.log(this.props.imgs[0])
    return (
      <div>
        <img src={ this.state.img } alt="" />
        <button onClick={ this.prevPicture }>Previous</button>
        <button onClick={ this.nextPicture }>Next</button>
      </div>
    )
  }
}

export default Carousel