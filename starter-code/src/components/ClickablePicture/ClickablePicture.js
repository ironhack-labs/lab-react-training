import React, { Component } from 'react';
import './style.css'

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
  updateClick = () => {
    let status = !this.state.clicked
    this.setState({
      clicked: status
    })
  }
  render(){
    return(
      <div className="img-container" onClick={this.updateClick}>
        {!this.state.clicked ? <img src={this.props.img} /> : <img src={this.props.imgClicked} />}
      </div>
    )
  }
}

export default ClickablePicture