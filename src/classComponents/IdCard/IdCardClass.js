import React from 'react';

class IdCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.lastName = this.props.lastName;
    this.firstName = this.props.firstName;
    this.gender = this.props.gender;
    this.height = this.props.height;
    this.birth = this.props.birth;
    this.picture = this.props.picture;
  }

  render() {
    return (
      <article className="idCard">
        <div>
          <img src={this.picture} alt="profile" />
        </div>
        <div>
          <p>
            <span>First Name:</span> {this.firstName}{' '}
          </p>
          <p>
            <span>Last Name:</span> {this.lastName}
          </p>
          <p>
            <span>Gender:</span> {this.gender}
          </p>
          <p>
            <span>Height:</span> {this.height}
          </p>
          <p>
            <span>Birth:</span> {this.birth}
          </p>
        </div>
      </article>
    );
  }
}

export default IdCardClass;
