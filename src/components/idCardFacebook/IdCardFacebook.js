import React, {Component} from 'react';
import './index.css';

class IdCardFacebook extends Component {
  state = {
    closed: true,
  };

  _handleOpenClose = () => {
    this.setState({
      closed: !this.state.closed
    })
  };

  render() {
    return (
      <div onClick={this._handleOpenClose} className={'idCardFacebook ' + this.props.className + ` ${this.state.closed ? 'closed' : ''}`}>
        <img src={this.props.img} alt=""/>
        <div className={'info'}>
          <p><b>First name</b> {this.props.firstName}</p>
          <p><b>Last name</b> {this.props.lastName}</p>
          <p><b>Country</b> {this.props.country}</p>
          <p><b>Type</b> {this.props.isStudent ? 'Studen' : 'Teacher'}</p>
        </div>
      </div>
    );
  }
}

export default IdCardFacebook;