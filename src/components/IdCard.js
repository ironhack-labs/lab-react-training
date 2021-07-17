import React from 'react';

class IdCard extends React.Component {

  render() {
    return <div className = "card">
      <img className="picture" src={this.props.picture} alt="logo" />
     
      <div className="card1">


        <p>
          <span> first Name : {this.props.firstName} </span>
          <br />
          <span> Last Name : {this.props.lastName} </span>
          <br />
          <span> Gender : {this.props.gender}  </span>
          <br />
          <span> Height : {this.props.height}  </span>
          <br />       
        </p>
      </div>
    </div>

  }
}

export default IdCard;