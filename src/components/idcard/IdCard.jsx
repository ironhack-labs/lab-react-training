import React from 'react';

export default class IdCard extends React.Component {
  render() {
    return(
      <div>
        <div>
          <img
            src={this.props.picture}
            alt='avatar'
          />
        </div>
        <div>
          <p><b>First Name: </b>{this.props.firstName}</p>
          <p><b>Last Name: </b>{this.props.lastName}</p>
          <p><b>Gender: </b>{this.props.gender}</p>
          <p><b>Height: </b>{this.props.height}</p>
          <p><b>Birth: </b>{this.props.birth}</p>
        </div>
      </div>
    )
  }
}