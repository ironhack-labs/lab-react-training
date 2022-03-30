import { Component } from 'react'
import guy from '../assets/images/maxence.png'
import guy1 from '../assets/images/maxence-glasses.png'

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  changeState() {
      this.setState({
        clicked: !this.state.clicked,
      });
      
  }

  render () {
      const imgString = this.state.clicked ? guy : guy1
      return (
        <button onClick={this.changeState.bind(this)}>
          <img src={imgString} alt=""></img>
        </button>
      );
  }
}

export default ClickablePicture