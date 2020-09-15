import React, {Component} from "react"

class IdCard extends Component {
  render() {
    return(
    <div className="IdCard box">
      <img src={this.props.picture}></img>
      <div>
        <span>First name : {this.props.firstName}</span>
        <br/>
        <span>Last name : {this.props.lastName}</span>
        <br/>
        <span>Gender : {this.props.gender}</span>
        <br/>
        <span>height : {this.props.height}</span>
        <br/>
        <span>Birth : {this.props.birth.toDateString()}</span>
      </div>
    </div>
    )
    }
}


export default IdCard
