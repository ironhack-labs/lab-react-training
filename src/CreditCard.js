import React from "react"

class CreditCard extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.type}</h3>
        <h3>  {this.props.number}</h3>
        <h3> Expires {this.props.expirationMonth}, {this.props.expirationYear}, {this.props.bank}</h3>
        <h3>  {this.props.owner}</h3>
      </div>
    )
  }
}

export default CreditCard;