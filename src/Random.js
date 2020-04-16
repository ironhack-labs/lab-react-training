import React from "react"

class Random extends React.Component {
  render() {
    return (
      <div>
      <h4> Random value between {this.props.min} and {this.props.max} </h4>
      </div>
    )
  }
}

export default Random;