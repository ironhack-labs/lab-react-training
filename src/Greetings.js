import React from "react"

class Greetings extends React.Component {
  render() {
    return(
    <div>
      <h4> {this.props.lang} {this.props.children}</h4>
    </div>
    )
  }
}

export default Greetings;