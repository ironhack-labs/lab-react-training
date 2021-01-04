import React from "react";

class IdCard extends React.Component {
    render() {
      console.log(this.props);
      return (
          <div className="IdCard">
          <img src={this.props.picture} alt="profile" className="userImage"/>
         <div className="userInfo">
          <div>Last Name: {this.props.lastName}</div>
          <div>First Name: {this.props.firstName} </div>
            <div>Gender: {this.props.gender} </div>
            <div>Height: {this.props.height} </div>
            <div>Birth: {this.props.birth.toString().slice(0,15)}</div>
            </div>
            </div>
      );
    };
}
    
    export default IdCard;