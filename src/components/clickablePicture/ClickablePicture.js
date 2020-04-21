import React, {Component} from 'react'
import '../clickablePicture/ClickablePicture.css'


class ClickablePicture extends Component {
  state = {
    clicked : false
  }

  changeImg = () => {
    this.setState({
      clicked : !this.state.clicked
    })
  }

  render(){
    const {originalImg, updateImg} = this.props;
    const showImg = this.state.clicked ? updateImg : originalImg
    return(
      <div>
        <img className="click-pic" src={showImg} alt="First time" onClick={this.changeImg} />
      </div>

    )
  }
}

export default ClickablePicture