import { Component } from "react";
import './IdCard.css'





class Idcard extends Component {
  
  render(){
    return(
      <div className ='container-idcard'>
        <div className = 'div-card'>
          <div className = 'photo-logo'>
            <img src= {this.props.picture}></img>
          </div>
            <div className = 'text-card'> 
              <span><b>First Name</b>:</span> <span>{this.props.firstName}</span>
              <br />
              <span><b>Last Name</b>:</span> <span>{this.props.lastName}</span>
              <br />
              <span><b>Gender</b>:</span> <span>{this.props.gender}</span>
              <br />
              <span><b>Height</b>:</span> <span>{this.props.height / 100}m</span>
              <br />
              <span><b>Birth</b>:</span> <span>{this.props.birth.toDateString()}</span>
            </div>
        </div>
      </div>
    )
  }
}

export default Idcard