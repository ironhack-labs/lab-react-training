import React from 'react';


class IdCard extends React.Component {
    render(){
        return (
          <div className="idCard">
            <img src={this.props.picture} alt="user photo" />
            <section>
              <p>
                <strong>First name:</strong> {this.props.firstName}
              </p>
              <p>
                <strong>Last name:</strong> {this.props.lastName}
              </p>
              <p>
                <strong>Gender:</strong> {this.props.gender}
              </p>
              <p>
                <strong>Height:</strong> {this.props.height / 100}m
              </p>
              <p>
                <strong>Birth:</strong> {this.props.birth.toDateString()}
              </p>
            </section>
          </div>
        );
    }
}
export default IdCard