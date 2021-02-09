import React from 'react';

class IdCardClass extends React.Component{
  render(){
    return(
      <div className='container-row fit-content'>
      <div>
        <img className='margin' src={this.props.picture}></img>
      </div>
      <div className='text-person'>
        <p><strong>First Name:</strong> {this.props.firstName}</p>
        <p><strong>Last Name:</strong> {this.props.lastName}</p>
        <p><strong>Gender:</strong>{this.props.gender}</p>
        <p><strong>Height:</strong> {this.props.height}</p>
        <p><strong>Birth:</strong> {this.props.birth}</p>
      </div>
    </div>
    )
  }

}

export default IdCardClass