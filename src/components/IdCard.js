import '../App.css'
const { Component } = require("react");

class IdCard extends Component{
    render(){
        return (
            <div className = "IdCard">
              <img src={this.props.picture}></img>
                <div>
                  <strong>First Name:</strong>{this.props.firstName}<br/>
                  <strong>Last Name:</strong>{this.props.lastName}<br/>
                  <strong>Gender:</strong>{this.props.gender}<br/>
                  <strong>Height:</strong>{this.props.height/100}<br/>
                  <strong>Birth:</strong>{this.props.birth.toDateString()};
                </div>
            </div>
        )
    }
}

export default IdCard