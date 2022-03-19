import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        currentImage : 0
    }

    move = (dir)=> {

        this.setState({
            currentImage: dir === "right" 
                ? this.state.currentImage === 3 ? 0 : this.state.currentImage + 1
                : this.state.currentImage === 0 ? 3 : this.state.currentImage - 1
        });
    }

  render() {
    return (
      <div>
            <button className=' btn ' onClick={() => this.move("left")}> left </button>

            <img src={this.props.images[this.state.currentImage]} alt="" />
            
            <button className='btn ' onClick={() => this.move("right")}> right </button>
      </div>
    )
  }
}
