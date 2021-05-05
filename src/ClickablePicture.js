import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.img,
    };
  }

  handleIncrementClick = () => {
    
    this.setState({
      img: this.props.imgClicked,
    });
  };

  render() {
    return(
    <img onClick={this.handleIncrementClick} src={this.state.img}/>
    );
  }
}
  

export default ClickablePicture;