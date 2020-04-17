import React from "react"

class BoxColor extends React.Component {
  render() {
    return (
      <div>
        <h3> rgb({this.props.r}, {this.props.g}, {this.props.b})</h3>
      </div>
    )
  }
}

export default BoxColor;