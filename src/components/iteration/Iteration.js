import React, {Component} from 'react';
import './index.css';

class Iteration extends Component {
  render() {
    return (
      <div className={'iteration ' + this.props.className}>
        <h1>{this.props.title}</h1>
        <div className={'content'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Iteration;