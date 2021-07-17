import '../App.css'
const { Component } = require("react");

class IdCard extends Component{
    render(){
        return (
            <div className = "IdCard">
              <img src={this.props.picture}></img>
              <b>First Name:</b>{this.props.firstName}<br/>
              <b>Last Name:</b>{this.props.lastName}<br/>
              <b>Gender:</b>{this.props.gender}<br/>
              <b>Height:</b>{this.props.height/100}<br/>
              <b>Birth:</b>{this.props.birth.toDateString()};
            </div>
        )
    }
}

export default IdCard