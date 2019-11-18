import "./id-card.css"
import React from "react";
// ^ this is always needed for any react components

class IdCard extends React.Component {  
  render() {
    // how to reference each label and the info inside the label
    // for(const key in this.props) {
    //   console.log(`Label: ${key} Data: ${this.props[key]}`)
    // }
    return (
      <div>
        <img src={this.props.picture} alt={this.props.firstName} />
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Gender: {this.props.gender}</div>
        <div>Height: {this.props.height}</div>
        <div>Birth: {this.props.birth.toDateString()}</div> 
      </div>
    );
  }
}

export default IdCard;