import React from 'react';

class IdCardClass extends React.Component{
  render(){
    return(
      <article className="idCard">
      <div>
        <img src={this.props.picture} alt="profile" />
      </div>
      <div>
        <p>
          <span>First Name:</span> {this.props.firstName}{' '}
        </p>
        <p>
          <span>Last Name:</span> {this.props.lastName}
        </p>
        <p>
          <span>Gender:</span> {this.props.gender}
        </p>
        <p>
          <span>Height:</span> {this.props.height}
        </p>
        <p>
          <span>Birth:</span> {this.props.birth}
        </p>
      </div>
    </article>
    )
  }

}

export default IdCardClass