import React from 'react';
import './ClickablePicture.css';


class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        isClicked: true
    }
  }

  handleImageClick = () => {
    return (
        this.state.isClicked === true ?
        this.setState({
          isClicked: false
        })
        :
        this.setState({
            isClicked: true
          })
    );
  }

  render() {
    return(
        <div className="clickBoy">
          {this.state.isClicked ? <img src={this.props.img} onClick={this.handleImageClick} alt="man-no-sunglasses"/> :
          <img src={this.props.imgClicked} onClick={this.handleImageClick} alt="man-with-sunglass"/> }
        </div>
  
    )
  }
  
}


export default ClickablePicture;