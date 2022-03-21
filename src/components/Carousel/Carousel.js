import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        count: 0
    }

    addCount = () => {
        // si no es posicion 3 adelante
        if(this.state.count !== 3) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    removeCount = () => {
        //si no es posicion 0 adelante
        if(this.state.count !== 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }



  render() {
     
    return (
      <div>
          <button onClick={this.removeCount}>Left</button>
          <img src={this.props.images[this.state.count]} alt="img"/>
          <button onClick={this.addCount}>Right</button>
      </div>
    )
  }
}
