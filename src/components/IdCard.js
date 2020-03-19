import React, { Component } from "react";

class IdCard extends Component {
  render() {
    return (
      <div>
        <p>
          First Name: {this.props.firstName} <br />
          Last Name: {this.props.lastName} <br />
          Gender: {this.props.gender} <br />
          Height: {this.props.height} <br />
          {this.props.picture} <br />
          {/* Birth: {this.props.birth} */}
        </p>
      </div>
    );
  }
}

export default IdCard;
