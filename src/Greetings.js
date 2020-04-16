import React from "react"

class Greetings extends React.Component {
  render() {
    return(
    <div>
      <h2> {this.props.lang} {this.props.children}</h2>
    </div>
    )
  }
}

export default Greetings;